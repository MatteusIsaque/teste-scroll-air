import styles from './../../styles/subPages/cardResults.module.scss'

type cardResults = {
  title: string
  paragraphOne?: string
  paragraphTwo?: string
  paragrapThree?: string
}

export default function CardResult({ title, paragraphOne, paragraphTwo, paragrapThree }: cardResults) {


  return (
    <div className={styles.main}>
      <h2>{title}</h2>
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
      <p>{paragrapThree}</p>
    </div>
  )
}