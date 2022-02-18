import Image from 'next/image'
import styles from './../../styles/architectureProject/callZap.module.scss'

type propsCallZap = {
  imageURL: string
}

export default function CallZap({ imageURL }: propsCallZap) {

  return (
    <div className={styles.main}>
      <img src={imageURL} />
    </div>
  )
}