import styles from './../../styles/security/reasonsToMigrate.module.scss'

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
        <CardReasos numberReason={1} textReason="Seriedade com cliente e preço justo na contação do seu sistema." />
        <CardReasos numberReason={2} textReason="Formação de equipe com profissionais especializados em seus devidos setores." />
        <CardReasos numberReason={3} textReason="Manutenção de equipamento e garantia de entrega." />
        <CardReasos numberReason={4} textReason="Excelente aváliação no feedback de nossos clienetes no Google meu negócio." />
        <CardReasos numberReason={5} textReason="Experiencia no mercado. Levamos essa experiência como soluções modernas aos nossos clientes" />
      </div>
    </section>
  )
}