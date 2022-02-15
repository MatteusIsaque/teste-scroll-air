import AllRecursos from "./../components/subPage/allRecursos";
import DadForm from "./../components/subPage/dadForm";
import Logo from "./../components/subPage/logo";
import Quotation from "./../components/subPage/quotation";
import ReasosToMigrate from "./../components/subPage/reasonsToMigrate";
import RecentQuestions from "./../components/subPage/recentQuestions";
import Results from "./../components/subPage/results";

// import Tel from './../../img/subPages/tel.jpg'

export default function comunicacaoEmpresarial() {
  return (
    <main>
      <Logo />
      <DadForm title="Sistema de Telefonia para empresas" subTitle="PABX EM NUVEM - APARELHO - VIDEOCONFERÊNCIA" paragraph="
Comece a cortar custos desnecessários em sua empresa, atualize a
          maneira que sua empresa se comunica! Gerenciamento de ramais
          com apenas 1 número, gravação em nuvem e suporte para
          videoconferência integrada aos melhores apps de chamada."
        list={["- Voz", "- Call", "- Gerenciamento de chamadas", "- Aparelho po IP", "- Videoconferência"]}
      />
      <ReasosToMigrate title="12 motivos para migrar sua telefonia para o Voip" paragraph="Vamos entender alguns dos principais motivos que leva empresas de sucessos a migrar
seu sistema de telefonia."/>

      <AllRecursos title="Todos os recursos que você espera." subTitle="Mais de 100 recursos entre seu VoIP na nuvem e suas Web, áudio e videoconferências."
      //  imageItem={Tel} 
      />

      <Quotation paragraph="Não deixe para depois, realize uma cotação com  um de nossos especialistas
e comece a mudar o rumo dos seus negócios!" buttonText="REALIZAR UMA COTAÇÃO" />

      <Results title="Simples mudanças GRANDES resultados" paragraph="Como a mudança pode te auxiliar e melhorar sua rotina de trabalho" />

      <RecentQuestions />
    </main>
  )
}