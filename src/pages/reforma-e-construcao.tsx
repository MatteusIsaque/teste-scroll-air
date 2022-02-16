import AllRecursos from "../components/subPage/allRecursos";
import DadForm from "../components/subPage/dadForm";
import Logo from "../components/subPage/logo";
import Quotation from "../components/subPage/quotation";
import ReasosToMigrate from "../components/subPage/reasonsToMigrate";
import RecentQuestions from "../components/subPage/recentQuestions";
import Results from "../components/subPage/results";


export default function ReformaEConstrucão() {

  return (
    <main>
      <Logo />
      <DadForm title="Reforma e Construção especializada sem dor de cabeça" subTitle="Projeto Arquitetônico - Ampliações ou Modificações - Revestimentos - Regularização de Imóveis -  Parte elétrica
 " paragraph="
 A Conceitu Air Tech® tem como objetivo construir ou reformar com qualidade e excelência, oferecendo uma equipe altamente capacitada e especializada nos mais diversos tipos de serviços na área da construção civil. Nosso Objetivo é proporcionar ao cliente a satisfação de um trabalho concluído com a melhor experiencia, desde o primeiro contato até a entrega da obra, com rapidez e eficiência que só a nossa equipe consegue."
        list={["- Projeto Arquitetônico", "- Ampliações ou Modificações", "- Revestimentos ", "- Regularização de Imóveis", "-  Parte elétrica"]}
      />
      <ReasosToMigrate title="12 motivos para contratar a Conceitu Air Tech" paragraph="Vamos conhecer os principais pontos do nosso serviço"/>

      {/* <AllRecursos title="Solicite agora mesmo um Eletricista!" subTitle="Prestação de serviços de mão de obra elétrica, realizamos todos os tipos de novas instalações, manutenções e reparos.." */}
      {/* //  imageItem={Tel} 
      /> */}

      <Quotation paragraph="Não deixe para depois, realize uma cotação com  um de nossos especialistas
e comece a mudar o rumo dos seus negócios!" buttonText="REALIZAR UMA COTAÇÃO" />

      <Results title="Solicite agora mesmo um Eletricista!" paragraph="Instalação de tomada, chuveiro, luminária. Execução e manutenção de projetos elétricos, quadros de distribuição, cabeamento elétrico e mais" />

      {/* <RecentQuestions /> */}
    </main>
  )
}