"use client";
import Panel from "@/app/components/Panel";
import Unavailable from "@/app/components/Unavailable";
import { getLockedStatus, getOwnerNFT } from "@/hooks";
import { TBALogo2 } from "@/public/svg/Icons";
import { COLLECTABLE_TYPE, TBA_TYPE } from "@/types";
import {
  fetchNFTData,
  fetchTbaFungibleAssets,
  fetchTbaNonFungibleAssets,
  getChainData,
} from "@/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { num } from "starknet";

const TokenBound = () => {
  const { chainId, tokenboundAddress } = useParams<{
    tokenboundAddress: string;
    chainId: string;
  }>();
  const { network, chainIdHex } = getChainData(chainId.toUpperCase());
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [tbaNotFound, setTbaNotFound] = useState(false);

  const [nft, setNft] = useState({
    image: "",
    name: "",
  });
  const [loading, setLoading] = useState(true);
  const [collectibles, setCollectibles] = useState<COLLECTABLE_TYPE[]>([]);

  const [tba, setTba] = useState<TBA_TYPE>({
    address: "",
    chain: "",
    locked: {
      status: false,
      timeLeftToUnlock: undefined,
    },
    ethBalance: 0,
    strkBalance: 0,
    daiBalance: undefined,
    usdcBalance: undefined,
    usdtBalance: undefined,
  });

  useEffect(() => {
    const fetchOwnerNFT = async ({
      network,
    }: {
      network: "" | "mainnet" | "sepolia";
    }) => {
      const alchemyBaseUrl = process.env.NEXT_PUBLIC_ALCHEMY_BASE_URL?.replace(
        "%network%",
        network
      );
      const owner = await getOwnerNFT({
        jsonRPC: `${alchemyBaseUrl}${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
        tbaAddress: tokenboundAddress,
      });

      if (owner) {
        const ownerAddress = num.toHex(owner[0]);
        const ownerTokenId = owner[1].toString();

        fetchNFTData({
          contractAddress: ownerAddress,
          chainIdHex,
          tokenId: ownerTokenId,
          setLoading: setLoading,
          setNft: setNft,
        });
        const locked_status = await getLockedStatus({
          jsonRPC: `${alchemyBaseUrl}${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
          tbaAddress: tokenboundAddress,
        });
        setTba((prev) => {
          return {
            ...prev,
            locked: {
              status: locked_status?.status,
              timeLeftToUnlock: locked_status?.time,
            },
          };
        });
      } else {
        setTbaNotFound(true);
      }
    };
    if (chainId && tokenboundAddress) {
      fetchOwnerNFT({ network });
      fetchTbaNonFungibleAssets({
        address: tokenboundAddress,
        setAssets: setCollectibles,
      });
      fetchTbaFungibleAssets({
        network,
        tbaAddress: tokenboundAddress,
        setTba,
        onMainnet: network === "mainnet",
      });
    }
  }, [network]);
  if (network === "sepolia")
    return (
      <Unavailable message="Token bound Iframe is Currently Unavailable on Sepolia." />
    );
  if (tbaNotFound)
    return <Unavailable message="Token bound Account Not Found" />;

  return (
    <main className="grid h-screen items-center">
      <section className="container mx-auto flex h-full max-h-[100rem] w-full lg:w-[50vw] lg:max-w-[100rem]">
        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-20 w-20 animate-bounce items-center justify-center rounded-full text-[#d9d9d966] mix-blend-difference">
              <TBALogo2 />
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            <div
              className={`grid h-full place-content-center transition-all ${isVisible ? "px-0 blur-sm" : "px-2 blur-0"}`}
            >
              <div className="h-[85vh] max-h-[100rem]">
                <img
                  src={nft?.image}
                  className={`h-full w-full ${isVisible ? "object-cover" : "object-contain"} `}
                  alt="NFT image"
                />
              </div>
            </div>
            <Panel
              activeTab={activeTab}
              address={tokenboundAddress}
              collectibles={collectibles}
              chain={network}
              lockedStatus={tba.locked.status}
              timeLeftToUnlock={tba.locked.timeLeftToUnlock}
              isVisible={isVisible}
              nftName={nft.name}
              setActiveTab={setActiveTab}
              setIsVisible={setIsVisible}
              ethBalance={tba.ethBalance}
              strkBalance={tba.strkBalance}
              daiBalance={tba.daiBalance}
              usdcBalance={tba.usdcBalance}
              usdtBalance={tba.usdtBalance}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default TokenBound;
