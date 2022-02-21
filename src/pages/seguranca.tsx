import Footer from "../components/global/footer";
import HeaderLandingPage from "../components/global/headerLandingPage";
import AllRecursos from "../components/security/allRecursos";
import DadForm from "../components/security/dadForm";
import Quotation from "../components/security/quotation";
import ReasosToMigrate from "../components/security/reasonsToMigrate";
import RecentQuestions from "../components/security/recentQuestions";
import Results from "../components/security/results";

import CameraProduto from './../image/security/camera-produtos.jpg'

export default function comunicacaoEmpresarial() {
  return (
    <main>
      <HeaderLandingPage />
      <DadForm
        title="Proteja suas conquistas"
        subTitle="Instalação de sistema de segurança completo"
        paragraph="Sistema de segurança empresarial, residencial e comercial. Realizamos a instalação e manutenção de equipamentos. Oferecemos soluções modernas com tecnologia de ponta. Zele por tudo que conquistou! Solicite uma cotação grátis."
        textButton="CHAMAR AGORA"
        list={["- Cameras ", "- Sistema de vigilancia Remota", "- Travas de segurança", "- Cercas e concertina elétrica", "-  Alarmes e campainhas", "- E muito mais"]}
      />

      <ReasosToMigrate title="5 motivos para confiar na Conceitu Air Tech®" paragraph="Vamos entender alguns dos principais motivos que levam muitas pessoas a optar pela ConceituAir Tech® na hora de escolher a empresa que irá implantar seu sistema de segurança." />

      <AllRecursos title="Você merce o melhor!" subTitle="Segurança de qualidade com equipamentos de qualidade."
        imageItem={CameraProduto}
      />

      <Quotation paragraph="Não deixe para depois, realize uma cotação com  um de nossos especialistas e comece a ter mais segurança!" buttonText="REALIZAR UMA COTAÇÃO" />

      <Footer />

      {/* <Results title="Simples mudanças GRANDES resultados" paragraph="Como a mudança pode te auxiliar e melhorar sua rotina de trabalho" />

      <RecentQuestions /> */}
    </main>
  )
}