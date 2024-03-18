import { CardNft } from "@/components/card-nft";
import { ContainerGrid } from "@/components/container.jsx";
import { CardCollectors } from "@/components/card-collectors";

import { SectionHero } from "@/components/section-hero";
import { SectionCarrousel } from "@/components/setcion-carrousel";

const featuredCollections = [

]

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCarrousel 
        subtitle='Destaque em Coleções' 
        title='Coleções notáveis' 
        data={[]}
      />
      <SectionCarrousel 
        subtitle='Seleção Mensal'
        title='Destaque do Mês'
        data={[]}
      />
      <SectionCarrousel 
        subtitle='Em Tendência'
        title='Tendências'
        data={[]}
      />
    </>
  );
}
