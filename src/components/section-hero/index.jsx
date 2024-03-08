import Image from "next/image";

import { ContainerGrid } from "../container";

import IconNFTBoost from "@/assets/icon-boost.svg";
import SmallNFT01 from "@/assets/nft-small.png";
import SmallNFT02 from "@/assets/double-nft.png";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";

export function SectionHero() {
  return (
    <section className='pt-36'>
      <ContainerGrid className='flex flex-col items-center'>
        <h3 className='flex items-center gap-2 text-sm @laptop:text-base @desktop:text-xl mb-3'>
          <Image src={IconNFTBoost} alt="Icon NFTBoost" />
          <span>Adentre um reino de possibilidades infinitas </span>
        </h3>
        <h1 className='text-5xl/normal @desktop:text-7xl/normal text-center font-BrownStdBold mb-4'>
          Explore um Universo
          <div className='inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32'>
            <Image 
                src={SmallNFT01} 
                alt="Small NFT 01" 
                className='w-11  '
            />
          </div>
          Digital de
          <Image 
            src={SmallNFT02} 
            alt="Small NFT 02" 
            className='inline-block w-16 mx-2'
          />
          Colecionáveis Únicos!
        </h1>
        <p className='w-full text-center text-sm @laptop:text-base mb-6'>
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>
        <div className='flex flex-col @tablet:flex-row items-center gap-4'>
            <Image src={GooglePlay} alt='Google Play' />
            <Image src={AppleStore} alt='Apple Store' />
        </div>
      </ContainerGrid>
    </section>
  );
}
