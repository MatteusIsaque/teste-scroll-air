import styles from './../../styles/subPages/results.module.scss'

import CardResult from "./cardResults"

type resultsType = {
  title: string
  paragraph?: string
}

export default function Results({ title, paragraph }: resultsType) {


  return (
    <div className={styles.main}>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <div className={styles.mainDiv}>
        <CardResult title="ATENÇÃO COM O CLIENTE"
          paragraphOne="Oferecemos uma excelente jornada de atendimento para os nossos clientes, da abertura da solicitação até a conclusão do serviço. Todos os pedidos são recepcionados e analisados por um arquiteto e um engenheiro experientes, até mesmo os de baixa complexidade."
          paragraphTwo="Técnicos atenciosos e altamente qualificados são acompanhados de perto em cada etapa do trabalho. Cuidam de tudo para o cliente, incluindo a compra dos materiais necessários em lojas especializadas.."
        />
        <CardResult title="Reformas e Contrução"
          paragraphOne="Todas as reformas gerenciadas pela Conceitu Air Tech passam por uma rígida supervisão de nossos arquitetos e engenheiros, garantindo a implementação eficiente e minuciosa de todos os detalhes do projeto arquitetônico."
        />
      </div>
    </div>
  )
}