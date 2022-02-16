import styles from './../../styles/subPages/reasonsToMigrate.module.scss'

import CardReasos from "./cardReasons"

type reasosToMigrateType = {
  title: string
  paragraph: string

}

export default function ReasosToMigrate({ title, paragraph }: reasosToMigrateType) {


  return (
    <section className={styles.main}>
      <h2>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
      <div className={styles.mainCards}>
        <CardReasos numberReason={1} textReason="Instalação e troca de interruptores e tomadas." />
        <CardReasos numberReason={2} textReason="Instalações de luminárias." />
        <CardReasos numberReason={3} textReason="Instalação de aquecedores." />
        <CardReasos numberReason={4} textReason="Redimensionamento de circuito." />
        <CardReasos numberReason={5} textReason="Substituição de cabeamento." />
        <CardReasos numberReason={6} textReason="Alteração de voltagem." />
        <CardReasos numberReason={7} textReason="Extensão de pontos elétricos." />
        <CardReasos numberReason={8} textReason="Manutenção e troca de quadro de distribuição." />
        <CardReasos numberReason={9} textReason="Aterramento." />
        <CardReasos numberReason={10} textReason="Serviços Elétricos." />
      </div>
    </section>
  )
}