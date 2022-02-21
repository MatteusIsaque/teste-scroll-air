import styles from './../../styles/architectureProject/fourSection.module.scss'

import Image from 'next/image'

type fourSection = {
  title: string,
  paragraph: string,

  titleImage?: string
  paragraphImage?: string[] | any
  buttonText: string

  ImageURL: any
}


export default function FourSection({ title, paragraph, titleImage, paragraphImage, buttonText, ImageURL }: fourSection) {

  return (
    <div className={styles.main}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      { titleImage &&
        <div className={styles.content}>
          <div className={styles.text}>
            <h3>{titleImage}</h3>
            {
              paragraphImage.map((text: string, index: any) => {
                return (
                  <p key={index} style={{ marginBottom: '10px' }}>
                    {text}
                  </p>
                )
              })
            }
            <button>{buttonText}</button>
          </div>
          <div>
            <Image src={ImageURL} />
          </div>
        </div>
      }
    </div>
  )
}