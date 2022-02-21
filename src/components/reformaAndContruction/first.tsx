import Image from 'next/image'
import styles from './../../styles/reformaAndConstruction/first.module.scss'

type propsFirst = {
  title?: string
  subTitle?: string
  paragraph?: string
  itens?: string[] | any
  textButton?: string
  urlImage?: any
}

export default function First({ title, subTitle, paragraph, itens, textButton, urlImage }: propsFirst) {

  return (
    <article className={styles.main}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{paragraph}</p>
        <ul>
          {itens && itens.map((item: number, index: any) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
        <button>
          {textButton}
        </button>
      </div>
      <Image src={urlImage} />
    </article>
  )
}