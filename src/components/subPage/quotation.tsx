import styles from './../../styles/subPages/quotation.module.scss'

type quotationType = {
  paragraph?: string;
  buttonText: string;
}

export default function Quotation({ paragraph, buttonText }: quotationType) {


  return (
    <div className={styles.main}>
      <p>{paragraph}</p>
      <button>{buttonText}</button>
    </div>
  )
}