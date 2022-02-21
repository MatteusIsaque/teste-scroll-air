import styles from './../../styles/reformaAndConstruction/slide.module.scss'

import Slide from "../architectureProject/slide";

type slideReformaAndConstruction = {
  title?: string
  titleButton?: string
  buttonText?: string
}

export default function SlideReformaAndConstruction({ title, titleButton, buttonText }: slideReformaAndConstruction) {

  return (
    <div className={styles.main}>
      <h2>
        {title}
      </h2>

      <Slide imagesURL={[
        // 'https://picsum.photos/seed/1/1600/700',
        // 'https://picsum.photos/seed/2/1600/700',
        // 'https://picsum.photos/seed/3/1600/700',
        // 'https://picsum.photos/seed/4/1600/700',
        // 'https://picsum.photos/seed/5/1600/700',
      ]} />

      <h3>{titleButton}</h3>
      <button className={styles.button}>{buttonText}</button>
    </div>
  )
}