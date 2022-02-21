import styles from './../../styles/security/infoAllRecursos.module.scss'

type InfoAllRecursosType = {
  title: string
  text: string
}


export default function InfoAllRecursos({ title, text }: InfoAllRecursosType) {

  return (
    <div className={styles.main}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}