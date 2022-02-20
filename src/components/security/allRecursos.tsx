import styles from './../../styles/security/allRecursos.module.scss'
import Image from 'next/image'

import InfoAllRecursos from './infoAllRecursos'

type AllRecursosType = {
  title: string
  subTitle: string
  imageItem?: any
}

export default function AllRecursos({ title, subTitle, imageItem }: AllRecursosType) {

  return (
    <section id="allRecursos" className={styles.main}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <div className={styles.mainDiv}>
        <div>
          <Image src={imageItem} />
        </div>
        <div>
          <InfoAllRecursos title="Sistema de Monitoramento" text="Cameras de segurança Alarmes Instalação sistema de monitoramento Manutenção e troca de equipamento "/>

          <InfoAllRecursos title="Trancas" text="Sistema de tranca elétrica Fechaduras com senha Videoporteiro" />

          <InfoAllRecursos title="Cercas" text="Cerca elétrica Cerca concertina Instalação e Manutenção"/>

          <InfoAllRecursos title="Sistema" text="Instalação de sistemas e fiação Integração de monitoramento remoto"/>

          <InfoAllRecursos title="Outros" text="Mais pedidos sobre consulta"/>
        </div>
      </div>
    </section>
  )
}