import styles from './../../styles/security/quotation.module.scss'

type quotationType = {
  paragraph?: string;
  buttonText: string;
}

export default function Quotation({ paragraph, buttonText }: quotationType) {

  return (
    <div id="cotaçãoDivClimatização" className={styles.main}>
      <p>{paragraph}</p>
      <button>{buttonText}</button>
    </div>
  )
}