import Image from 'next/image'
import styles from './../../styles/climatização/ourSolution.module.scss'

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
            <h5>Instalação</h5>
            <p>A instalação sendo feita da forma certa aumenta o bom desempenho do aparelho, além de melhorar  a vida útil do equipamento. Trabalhamos com instalação de todas as marcas e modelos.</p>
          </div>
          <div>
            <h5>Manutenção</h5>
            <p>Manutenção de ar condicionado é essencial para o bom funcionamento do aparelho e climatização do ambiente, pois só quando chega o verão lembramos que o ar condicionado não está 100%. Então, uma manutenção a cada 6 meses verificando a limpeza do aparelho e fluído refrigerante é essencial para quando for preciso acionar o seu ar condicionado ele dar conta de resfriar seu ambiente.
            </p>
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