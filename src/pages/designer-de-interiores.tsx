import CallZap from "../components/architectureProject/callZap";
import End from "../components/architectureProject/end";
import FifthSection from "../components/architectureProject/fifthSection";
import FourSection from "../components/architectureProject/fourSection";
import Slide from "../components/architectureProject/slide";
import TwoSection from "../components/architectureProject/twoSection";

import Ambiente from './../image/interiorDesigner/ambiente.jpg'
import DecoraçãoSala from './../image/interiorDesigner/decorac-sala.jpg'
import Escritorio from './../image/interiorDesigner/escr.jpg'
import Sala from './../image/interiorDesigner/s3.jpg'
import Sala2 from './../image/interiorDesigner/sala-dec.jpg'
import Sala3 from './../image/interiorDesigner/sala.jpg'
import Sala4 from './../image/interiorDesigner/ss.jpg'

import DesignerInterior from './../image/interiorDesigner/designe-interiores.jpg'

import Faixa from './../image/interiorDesigner/faxa.jpg'

export default function DesignerDeInteriores() {

  return (
    <main>
      <Slide imagesURL={[
        Ambiente,
        DecoraçãoSala,
        Escritorio,
        Sala,
        Sala2,
        Sala3,
        Sala4,
      ]} />

      <TwoSection title='DESIGNER DE INTERIORES' subTitle='Transforme um pequeno espaço em algo incrível?' titleImage="Decorando e entregando" imageURL={DesignerInterior} paragraph={
        [
          'Da ideia inicial até a concretização do seu sonho, alinhado as suas necessidades dentro do valor que você quer investir!',
          'Ambiente residencial, comercial e empresarial. Seja qual for sua ideia ou necessidade conte com uma equipe de especialista que ira te acompanhar desde a formação do conceito até a entrega do projeto concluído.',
          'Não deixe para depois, realize um agendamento online com a nossa equipe através do nosso whatsapp e conheça um pouco mais sobre o nosso trabalho.',
        ]
      }
        buttonText='Realizar chamada'
      />

      <CallZap imageURL={Faixa} />

      <FourSection title='Acompanhamento Profissional' paragraph='Respeitamos a preferencia e desejo de nossos cliente, por isso contamos com a disponibilidade de um profissional que ira acompanhar de perto todo a realização do projeto. Evite dores de cabeças e gastos desnecessários, conte com uma equipe de profissionais a sua disposição!' paragraphImage={
        [
          "Renove seu espaço! Atuamos na concepção e companhamento de projetos para empresas, comércios, escritórios e showrooms. Projetos únicos, sempre pensando na eficiência, conforto e produtividade de cada ambiente.",
          "Estamos presentes em todas as etapas de projeto e obra, desde a primeira reunião até a decoração e limpeza final, garantindo todos os prazos, orçamentos, sem dor de cabeça!"
        ]
      }
        buttonText="Agendar uma visita" ImageURL='https://picsum.photos/seed/10/600/600' />

      <FifthSection paragraphs={[
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