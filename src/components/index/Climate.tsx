import { useEffect } from 'react'
import BoxInformation from '../global/BoxInformation'
import styles from './../../styles/index/climate.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Climate() {

  useEffect(() => {

    const buttons: any = gsap.utils.toArray('#serviceInformationButton')
    const height = window.innerHeight

    gsap.to(buttons[12], {
      opacity: 1,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        start: `${height * 3 / 1.05}px 0px`,
        end: `${height * 4.25}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })
  }, [])

  return (
    <section id="climateMain" className={styles.main}>
      <BoxInformation id="climateMain" buttonPosition={12} textPosition={4} right="38vw" bottom="20vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" rightText='40px' alignText='end' />
    </section>
  )
}