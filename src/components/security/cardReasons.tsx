import styles from './../../styles/security/cardReasons.module.scss'

type DadReasons = {
  numberReason: number
  textReason: string
}

export default function CardReasos({ numberReason, textReason }: DadReasons) {

  return (
    <div className={styles.main}>
      <h3> {numberReason}</h3>
      <p>{textReason}</p>
    </div>
  )
}