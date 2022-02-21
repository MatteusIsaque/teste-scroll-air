import Image from 'next/image'
import styles from './../../styles/architectureProject/twoSection.module.scss'

type PropsTwoSection = {
  title: string,
  subTitle: string,
  titleImage: string,
  imageURL: any,
  paragraph?: string[] | any,
  buttonText: string
}


export default function TwoSection({ title, subTitle, titleImage, imageURL, paragraph, buttonText }: PropsTwoSection) {


  return (
    <article className={styles.main}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div className={styles.textDiv}>
        <div>
          <Image src={imageURL} />
        </div>
        <div className={styles.text}>
          <h2>{titleImage}</h2>
          {
            paragraph.map((text: string, index: number) => {
              return (
                <p key={index}>
                  {text}
                </p>
              )
            })
          }
          <button>{buttonText}</button>
        </div>
      </div>
    </article>
  )
}