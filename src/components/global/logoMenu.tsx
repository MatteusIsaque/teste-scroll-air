import styles from './../../styles/global/logoMenu.module.scss'
import Logo from './../../image/global/logo-color.jpg'

import Image from 'next/image'


export default function LogoMenu() {

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={Logo} />
      </div>
    </div>
  )
}