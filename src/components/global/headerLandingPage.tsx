import Image from 'next/image'
import Logo from './../../image/global/logo-color.jpg'

import styles from './../../styles/global/headerLandingPage.module.scss'

export default function HeaderLandingPage(){

  return(
    <header className={styles.main}>
      <Image src={Logo}/>
    </header>
  )
}