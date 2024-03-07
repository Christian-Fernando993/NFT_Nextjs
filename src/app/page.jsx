import { CardNft } from "@/components/card-nft";
import { ContainerGrid } from "@/components/container.jsx";
import { CardCollectors } from "@/components/card-collectors";

import ImgNft from '@/assets/img-neft/01.jpg'

export default function Home() {
  return (
    <>
      <section className='w-full h-screen flex items-center justify-center'>
        <CardCollectors 
          image={ImgNft}
          name ='Lorem ipsum'
          value_btc='0.721' 
          percent='20'
        />
      </section>
    </>
  );
}
