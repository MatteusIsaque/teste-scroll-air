
import Footer from "../components/global/footer";
import LogoMenu from "../components/global/logoMenu";
import First from "../components/reformaAndContruction/first";
import OurSolution from "../components/climatização/ourSolution";
import SlideReformaAndConstruction from "../components/reformaAndContruction/slide";
import DadForm from "../components/reformaAndContruction/dadForm";

import Capa from './../image/reformaAndContruction/capa.jpg'
import Homem from './../image/reformaAndContruction/homem.jpg'
import End from "../components/architectureProject/end";

import Primeira from './../image/climatização/ss.jpg'
import Segundo from './../image/climatização/S1.jpg'

export default function Climatização() {

  return (
    <>
      <head>
        <title>ConceituAir Tech - Reforma e Construção</title>
      </head>
      <main>
        <LogoMenu />
        <First
          title='Climatizando os seus ambientes.'
          subTitle='Instalação - Manutenções - Reparos'
          paragraph='Nosso trabalho está direcionado para residências e para espaços comerciais, como: Edifícios, escritórios, shoppings centers, lojas, hipermercados, restaurantes, estúdios, call centers, clínicas e entre outros.'
          // itens={[
          //   'Economia de tempo e dinheiro',
          //   'Otimização dos espaços',
          //   'Mão de obra especializada',
          //   'Pagamento Flexível'
          // ]}
          textButton='Solicitar contato'
          urlImage={Primeira}
        />
        <OurSolution
          title='NOSSAS SOLUÇÕES'
          button='VEJA ALGUNS DE NOSSOS PROJETOS'
          imageUrl={Segundo}
        />
        <DadForm
          color='var(--blue-dark)'
          title="Não perca mais tempo e faça seu pedido agora"
          paragraph="A preparação do serviço varia de acordo com o tipo do equipamento a ser instalado, se é de janela, de parede, etc. Para todos os modelos, antes do serviço de instalação de ar condicionado, o técnico realiza a verificação da estrutura do imóvel, avaliando a necessidade de aberturas de paredes, pisos ou lajes para a passagem dos tubos do equipamento."
          // list={["Cumprimento do orçamento e prazo programados", " Limpeza diária durante a obra ", "Utilizamos materiais e serviços de primeira qualidade", "Mais de 300 obras realizadas."]}
          paragraphTwo='Solicite uma cotação em nosso formulario ou realize uma contação rápida pelo whatsapp'
          textButton='CHAMAR NO WHATSAPP'
        />

        <End />

        {/* <SlideReformaAndConstruction
        // title='VEJA ALGUNS PROJETOS CONCLUIDO'
        titleButton="Obra de qualidade é aquela que não gera dor de cabeça"
        buttonText='CHAMAR AGORA'
      /> */}

        <Footer />
      </main>
    </>
  )
}