import CallZap from "../components/architectureProject/callZap";
import End from "../components/architectureProject/end";
import FifthSection from "../components/architectureProject/fifthSection";
import FourSection from "../components/architectureProject/fourSection";
import Slide from "../components/architectureProject/slide";
import TwoSection from "../components/architectureProject/twoSection";


export default function ProjetoDeArquitetura() {

  return (
    <main>
      <Slide imagesURL={[
        'https://picsum.photos/seed/1/1600/920',
        'https://picsum.photos/seed/2/1600/920',
        'https://picsum.photos/seed/3/1600/920',
        'https://picsum.photos/seed/4/1600/920',
        'https://picsum.photos/seed/5/1600/920',
      ]} />

      <TwoSection title='ARQUITETURA' subTitle='Projeto residencial, comercial ou uma simples reforma?' titleImage="Construindo e entregando" imageURL='https://picsum.photos/seed/7/600/600' paragraph={
        [
          'Para um bom projeto, é necessário um conhecimento a fundo de suas expectativas, então uma reunião/entrevista é realizada a fim de conhecer o que você deseja, quais suas necessidades e expectativas em relação ao projeto que será projetado.',
          '- Alvarás construtivos e aprovação de projetos;',
          '- Permissões públicas municipais, estaduais e federais;',
          '- Gerenciamento de obras e monitoramento de licenças;',
          '- Consultoria em arquitetura legal;',
          'Veja mais serviços atráves da nossa central de atendimento abaixo.'
        ]
      }
        buttonText='Realizar chamada'
      />

      <CallZap imageURL='https://picsum.photos/seed/9/1920/400' />

      <FourSection title='Acompanhamento Profissional' paragraph='São feitas visitas ao local do projeto, para que seja feito o Levantamento Métrico, elaboração de apontamentos com aspectos específicos. Na finalização do projeto, é entregue ao cliente um caderno com todos os dados necessários do projeto. Você tem a garantia de um trabalho qualificado e seguro!' titleImage="Solução de projetos" paragraphImage={
        [
          "Renove seu espaço! Atuamos na concepção e companhamento de projetos para empresas, comércios, escritórios e showrooms. Projetos únicos, sempre pensando na eficiência, conforto e produtividade de cada ambiente.",
          "Estamos presentes em todas as etapas de projeto e obra, desde a primeira reunião até a decoração e limpeza final, garantindo todos os prazos, orçamentos, sem dor de cabeça!"
        ]
      }
        buttonText="Agendar uma visita" ImageURL='https://picsum.photos/seed/10/600/600' />

      <FifthSection title='PRECISOU CHAMOU!' paragraphs={[
        'Consultoria em arquitetura legal e viabilidade Urbana',
        'Permissões públicas, regularização e legalização imobiliário',
        'Auditoria, gerenciamento e real estate compliance',
        'Projetos técnicos, alvarás e aprovações',
        'Outros pedidos através da nossa central'
      ]} />

      <End />
    </main>
  )
}