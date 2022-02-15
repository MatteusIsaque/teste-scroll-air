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
        <CardReasos numberReason={1} textReason="Um dos principais diferenciais é PODER atender até 1.000 ligações simultâneas apenas com um número." />
        <CardReasos numberReason={2} textReason="Solução completamente em nuvem, com 11 datacenters espalhados pelo mundo." />
        <CardReasos numberReason={3} textReason="Total segurança, com codec dinâmico OPUS. Jive View para acompanhar a latência em tempo real." />
        <CardReasos numberReason={4} textReason="Utilize somente 90kbps por ligação completada dentro da estrutura." />
        <CardReasos numberReason={5} textReason="Atendimento em mais de 1000 cidades no Brasil." />
        <CardReasos numberReason={6} textReason="Configuração totalmente gráfica, simples e objetiva." />
        <CardReasos numberReason={7} textReason="Terceira maior operadora em abrangência no Brasil." />
        <CardReasos numberReason={8} textReason="Planos econômicos e versáteis." />
        <CardReasos numberReason={9} textReason="Acabou a luz? Sem problema! Seu sistema ira continuaronline pois funciona até em 3G/4G, do celular." />
        <CardReasos numberReason={10} textReason="Soluções completas para Call Center." />
        <CardReasos numberReason={11} textReason="Um dos principais diferenciais é PODER atender até 1.000 ligações simultâneas apenas com um número." />
        <CardReasos numberReason={12} textReason="Um dos principais diferenciais é PODER atender até 1.000 ligações simultâneas apenas com um número." />
      </div>
    </section>
  )
}