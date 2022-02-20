
import Footer from "../components/global/footer";
import LogoMenu from "../components/global/logoMenu";
import First from "../components/reformaAndContruction/first";
import OurSolution from "../components/reformaAndContruction/ourSolution";
import SlideReformaAndConstruction from "../components/reformaAndContruction/slide";
import DadForm from "../components/security/dadForm";

import Capa from './../image/reformaAndContruction/capa.jpg'
import Homem from './../image/reformaAndContruction/homem.jpg'

export default function ReformaEConstrucão() {

  return (
    <main>
      <head>
        <title>ConceituAir Tech - Reforma e Construção</title>
      </head>
      <LogoMenu />
      <First
        title='Reforma e Construção especializada'
        subTitle='Pintura - parte elétrica - reforma e construção especializada!'
        paragraph='Evite estresse e desperdício de dinheiro com a reforma ou construção. Realize o seu sonho com os métodos mais modernos que a arquitetura tem para te oferecer.'
        itens={[
          'Economia de tempo e dinheiro',
          'Otimização dos espaços',
          'Mão de obra especializada',
          'Pagamento Flexível'
        ]}
        textButton='Solicitar contato'
        urlImage={Capa}
      />
      <OurSolution 
      // title='NOSSAS SOLUÇÕES'
      //   button='VEJA ALGUNS DE NOSSOS PROJETOS'
      //   imageUrl={Homem}
      />
      {/* <DadForm
        color='var(--blue-dark)'
        title="Obra de qualidade é aquela que não gera dor de cabeça"
        paragraph="Zelamos por nosso trabalho, pois sabemos que a seriedade e profissionalismo são imprescindíveis para toda obra bem feita!"
        list={["Cumprimento do orçamento e prazo programados", " Limpeza diária durante a obra ", "Utilizamos materiais e serviços de primeira qualidade", "Mais de 300 obras realizadas."]}
        paragraphTwo='Solicite uma cotação em nosso formulario ou realize uma contação rápida pelo whatsapp'
        textButton='CHAMAR NO WHATSAPP'
      /> */}
      <SlideReformaAndConstruction
        title='VEJA ALGUNS PROJETOS CONCLUIDO'
        titleButton="Obra de qualidade é aquela que não gera dor de cabeça"
        buttonText='CHAMAR AGORA'
      />

      <Footer />
    </main>
  )
}