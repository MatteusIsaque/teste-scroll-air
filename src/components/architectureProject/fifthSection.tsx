import styles from './../../styles/architectureProject/fifithSection.module.scss'

type fifthSection = {
  title?: string
  paragraphs: string[]
}

export default function FifthSection({ title, paragraphs }: fifthSection) {

  return (
    <div className={styles.main}>
      <h4>{title}</h4>
      { title &&
        paragraphs.map((text: string, index: number) => {
          return (
            <p key={index}>
              {text}
            </p>
          )
        })
      }
    </div>
  )
}