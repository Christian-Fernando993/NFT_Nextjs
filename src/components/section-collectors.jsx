import { CardCollectors } from "./card-collectors";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import Thumb01 from '@/assets/img-neft/01.jpg'
import Thumb02 from '@/assets/img-neft/02.jpg'
import Thumb03 from '@/assets/img-neft/03.jpg'
import Thumb04 from '@/assets/img-neft/04.jpg'
import Thumb05 from '@/assets/img-neft/05.jpg'
import Thumb06 from '@/assets/img-neft/06.jpg'
import Thumb07 from '@/assets/img-neft/07.jpg'
import Thumb08 from '@/assets/img-neft/08.jpg'

export function SectionCollectors() {

    const collectors = [
        {
            image: Thumb01,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
        {
            image: Thumb02,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
        {
            image: Thumb03,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
        {
            image: Thumb04,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
        {
            image: Thumb05,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
        {
            image: Thumb06,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
        {
            image: Thumb07,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
        {
            image: Thumb08,
            name: 'Lorem Ipsum', 
            percent: '+20',
            value_btc: '0.721',
        }, 
    ]


    return (
        <ContainerGrid className='py-10 @desktop:py-28'>
            <TitleSection 
                subtitle='Colecionadores em Foco'
                title='Principais colecionadores'
            />

            <div className='grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4 '>
                {
                   collectors.map(({ image, name, percent, value_btc }, index) => (
                    <CardCollectors  
                        key={index}
                        position={index + 1}
                        image={image}
                        name={name}
                        percent={percent}
                        value_btc={value_btc}
                    />
                   )) 
                }

            </div>

        </ContainerGrid>
    )
}