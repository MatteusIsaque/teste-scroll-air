import styles from './../../styles/security/questions.module.scss'

type questionsType = {
  question: string
  response: string
}

export default function Questions({ question, response }: questionsType) {


  return (
    <div className={styles.main}>
      <h4>{question}</h4>
      <p>{response}</p>
    </div>
  )
}