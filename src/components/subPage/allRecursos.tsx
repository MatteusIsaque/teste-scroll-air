import styles from './../../styles/subPages/allRecursos.module.scss'
import Image from 'next/image'

import InfoAllRecursos from './infoAllRecursos'

type AllRecursosType = {
  title: string
  subTitle: string
  imageItem?: any
}

export default function AllRecursos({ title, subTitle, imageItem }: AllRecursosType) {

  return (
    <section className={styles.main}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <div className={styles.mainDiv}>
        <div>
          {/* <Image src={imageItem} /> */}
        </div>
        <div>
          <InfoAllRecursos title="voz" text="PBX na nuvem
            Música de espera personalizável
            Editor do plano de discagem
            Chamadas internacionais"/>
          <InfoAllRecursos title="Gerenciamento de chamadas" text="PBX na nuvem
            Música de espera personalizável
            Editor do plano de discagem
            Chamadas internacionais" />
          <InfoAllRecursos title="Call Center" text="Estratégias avançadas de toque
            Anúncio pré-chamada
            Filas ilimitadas de chamada
            Anúncio de tempo de espera"/>
          <InfoAllRecursos title="Videoconferência" text="Reuniões com até 250 participantes
            Até 25 feeds de vídeo em HD
            Compartilhamento de tela com um clique
            Salas de reuniões personalizadas"/>
        </div>
      </div>
    </section>
  )
}