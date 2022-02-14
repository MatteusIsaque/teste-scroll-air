import { useEffect } from 'react'
import BoxInformation from '../global/BoxInformation'
import styles from './../../styles/index/security.module.scss'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export default function Security() {

  useEffect(() => {
    const buttons: any = gsap.utils.toArray('#serviceInformationButton')
    const height = window.innerHeight

    gsap.to(buttons[15], {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        start: `${height * 4 / 1.05}px 0px`,
        end: `${height * 5}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })

    gsap.to(buttons[18], {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        start: `${height * 4 / 1.05}px 0px`,
        end: `${height * 5}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })

    gsap.to(buttons[21], {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        start: `${height * 4 / 1.05}px 0px`,
        end: `${height * 5}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })
  }, [])

  return (
    <section id="securityMain" className={styles.main}>
      <BoxInformation id="securityMain" buttonPosition={15} textPosition={5} left="10vw" bottom="40vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />

      <BoxInformation id="securityMain" buttonPosition={18} textPosition={6} left="45vw" bottom="40vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />

      <BoxInformation id="securityMain" buttonPosition={21} textPosition={7} right="16vw" bottom="40vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" rightText='40px' alignText='end' />
    </section>
  )
}