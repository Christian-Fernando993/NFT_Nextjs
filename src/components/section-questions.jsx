import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

export function SectionQuestions() {

    const questions = [
        {
            question: 'O que são NFTs',
            response: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, et.'
        },
        {
            question: 'Como funciona a compra de NFTs em seu site?',
            response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse labore asperiores eaque magni explicabo minus repudiandae nulla laborum dolorum.'
        },
        {
            question: 'Como posso vender meus próprios NFTs?',
            response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, similique!'
        },
        {
            question: 'Os NFTs são seguros e autênticos?',
            response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis non iusto, ea quibusdam itaque consequuntur doloremque sit vel voluptates.'
        },
        {
            question: 'Quais são as taxas envolvidas na compra e venda de NFTs em seu site?',
            response: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, quia quisquam mollitia, in veniam sit nobis culpa aut deleniti nostrum asperiores accusamus unde delectus eligendi?'
        },
    ]



    return (
        
        <section className='pt10 @desktop:pt-28'>
            <ContainerGrid>
                <TitleSection
                    subtitle='Desvendando os Mistérios dos NFTs'
                    title='Perguntas frequentes'
                />
                <div className=''>
                
                {
                    questions.map(({question, response}, index) => (
                        <Accordion key={index} type="single" collapsible className="w-full">
                            <AccordionItem value={`question-${index}`}>
                                <AccordionTrigger>{question}</AccordionTrigger>
                                <AccordionContent>{response}</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))
                }


            </div>
        </ContainerGrid>
        </section >
    )
}

