import { Contract, RpcProvider } from "starknet";
import ERC20ABI from "../app/abis/token.abi.json";
import {
  DAI_TOKEN_DETAILS,
  ETHER_TOKEN_DETAILS,
  STARK_TOKEN_DETAILS,
  USDC_TOKEN_DETAILS,
  USDT_TOKEN_DETAILS,
} from "@/utils/constants";
import { Dispatch, SetStateAction } from "react";
import { TBA_TYPE } from "@/types";

export function getProvider(jsonRPC: string) {
  const provider = new RpcProvider({
    nodeUrl: jsonRPC,
  });
  return provider;
}

export async function getBalance({
  address,
  jsonRPC,
  tokenAddress,
  tokenDecimal,
}: {
  address: string;
  jsonRPC: string;
  tokenAddress: string;
  tokenDecimal: number;
}) {
  const provider = getProvider(jsonRPC);
  let balance;
  if (provider) {
    const contract = new Contract(ERC20ABI, tokenAddress, provider);
    try {
      const res = await contract.balanceOf(address);
      balance = res?.balance?.low.toString() / tokenDecimal;
    } catch (error) {
      console.log(error);
    }
  }
  return balance;
}

export const fetchTbaFungibleAssets = async ({
  network,
  tbaAddress,
  setTba,
  onMainnet = false,
}: {
  network: "" | "mainnet" | "sepolia";
  tbaAddress: string;
  setTba: Dispatch<SetStateAction<TBA_TYPE>>;
  onMainnet?: boolean;
}) => {
  const alchemyBaseUrl = process.env.NEXT_PUBLIC_ALCHEMY_BASE_URL?.replace(
    "%network%",
    network
  );
  try {
    let currentDaiBalance: number | undefined = undefined;
    let currentUsdcBalance: number | undefined = undefined;
    let currentUsdtBalance: number | undefined = undefined;
    const ethBalance = await getBalance({
      address: tbaAddress,
      jsonRPC: `${alchemyBaseUrl}${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
      tokenAddress: ETHER_TOKEN_DETAILS.address,
      tokenDecimal: ETHER_TOKEN_DETAILS.decimal,
    });

    const strkBalance = await getBalance({
      address: tbaAddress,
      jsonRPC: `${alchemyBaseUrl}${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
      tokenAddress: STARK_TOKEN_DETAILS.address,
      tokenDecimal: STARK_TOKEN_DETAILS.decimal,
    });
    if (onMainnet) {
      const daiBalance = await getBalance({
        address: tbaAddress,
        jsonRPC: `${alchemyBaseUrl}${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
        tokenAddress: DAI_TOKEN_DETAILS.address,
        tokenDecimal: DAI_TOKEN_DETAILS.decimal,
      });
      currentDaiBalance = daiBalance;
      const usdcBalance = await getBalance({
        address: tbaAddress,
        jsonRPC: `${alchemyBaseUrl}${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
        tokenAddress: USDC_TOKEN_DETAILS.address,
        tokenDecimal: USDC_TOKEN_DETAILS.decimal,
      });
      currentUsdcBalance = usdcBalance;
      const usdtBalance = await getBalance({
        address: tbaAddress,
        jsonRPC: `${alchemyBaseUrl}${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
        tokenAddress: USDT_TOKEN_DETAILS.address,
        tokenDecimal: USDT_TOKEN_DETAILS.decimal,
      });
      currentUsdtBalance = usdtBalance;
    }
    setTba((prev) => ({
      ...prev,
      ethBalance: ethBalance || 0,
      strkBalance: strkBalance || 0,
      daiBalance: currentDaiBalance,
      usdcBalance: currentUsdcBalance,
      usdtBalance: currentUsdtBalance,
    }));
  } catch (error) {
    console.error("Error fetching TBA data", error);
  }
};
export const fetchTbaNonFungibleAssets = async ({
  address,
  url,
  setAssets,
}: {
  url: string;
  address: string;
  setAssets: Dispatch<SetStateAction<any[]>>;
}) => {
  const endpoint = `${url}/owners/${address}/tokens`;

  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_ARK_API_KEY || "",
      },
    });
    if (res.ok) {
      const data = await res.json();
      const assets = data.result.map((asset: any) => {
        const { contract_address: assetAddress, metadata, token_id } = asset;

        const assetImage =
          metadata?.normalized?.image ||
          `https://placehold.co/250x250?text=${metadata?.normalized?.image || token_id}`;
        return { assetAddress, assetImage };
      });
      setAssets(assets);
    }
  } catch (error) {
    console.log(
      "Error getting token bound account non fungible assets:",
      error
    );
  }
};
export const getChainData = (
  id: string
): {
  network: "mainnet" | "sepolia" | "";
  url: string | undefined;
} => {
  switch (id) {
    case "SN_MAIN":
      return {
        network: "mainnet",
        url: process.env.NEXT_PUBLIC_ARK_MAINNET_API,
      };
    case "SN_SEPOLIA":
      return {
        network: "sepolia",
        url: process.env.NEXT_PUBLIC_ARK_SEPOLIA_API,
      };

    default:
      return {
        network: "",
        url: "",
      };
  }
};

export const fetchNFTData = async ({
  endpoint,
  setLoading,
  setNft,
}: {
  endpoint: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNft: Dispatch<
    SetStateAction<{
      image: string;
      name: string;
    }>
  >;
}) => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_ARK_API_KEY || "",
      },
    });
    if (response.ok) {
      const data = await response.json();
      const imageUrl = data.result.metadata.normalized.image;
      const nftName = data.result.metadata.normalized.name;

      setNft({
        image: imageUrl,
        name: nftName,
      });
      setLoading(false);
    }
  } catch (error) {
    console.error("An error occurred while fetching the nft", error);
  }
};

export const formatTime = ({ seconds }: { seconds: number }) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let timeString = "";
  if (hours > 0) {
    timeString += `${hours}h `;
  }
  if (minutes > 0 || hours > 0) {
    timeString += `${minutes}m `;
  }
  timeString += `${remainingSeconds}s`;
  return timeString;
};
