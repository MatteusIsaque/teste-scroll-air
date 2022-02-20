import Image from 'next/image'
import styles from './../../styles/reformaAndConstruction/ourSolution.module.scss'

type ourSolution = {
  title: string

  imageUrl: any

  button: string
}

export default function OurSolution({ title, imageUrl, button }: ourSolution) {

  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <div className={styles.content}>
        <div className={styles.text}>
          <div>
            <h5>Projetos</h5>
            <p>Desenvolvimento e execução de projetos arquitetônicos residenciais e comerciais.</p>
          </div>
          <div>
            <h5>Hidráulica</h5>
            <p>Contamos com profissionais especializados em redes hidráulica.</p>
          </div>
          <div>
            <h5>Manutenção predial</h5>
            <p>Equipe preparada para realizar todos os serviços necessariaos para uma manutenção predial de qualidade.</p>
          </div>
          <div>
            <h5>Pintura</h5>
            <p>Pintura externa e interna.</p>
          </div>
          <div>
            <h5>Elétrica</h5>
            <p>Serviços elétrica para residencia, comércios, manutenção predial e industrial.</p>
          </div>
          <div>
            <h5>Alvenaria</h5>
            <p>Ampla esperiência em alvenaria e estruturas necessárias para uma construção e reforma.</p>
          </div>
          <div>
            <h5>Limpeza pós-obra</h5>
            <p>Contamos com parceiros especializados para a limpeza pós-obra.</p>
          </div>
          <div />
          <button>{button}</button>
        </div>
        <div className={styles.homem} >
          <Image src={imageUrl} />
        </div>
      </div>
    </div>
  )
}