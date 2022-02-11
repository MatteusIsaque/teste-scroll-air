import BoxInformation from '../global/BoxInformation'
import styles from './../../styles/index/reformAndConstruction.module.scss'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import { useEffect } from 'react'

gsap.registerPlugin()

export default function ReformAndConstruction() {

  useEffect(() => {
    const buttons: any = gsap.utils.toArray('#serviceInformationButton')
    const height = window.innerHeight

    gsap.to(buttons[24], {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        start: `${height * 5 / 1.05}px 0px`,
        end: `${height * 5.95}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })

    gsap.to(buttons[27], {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        start: `${height * 5 / 1.05}px 0px`,
        end: `${height * 5.95}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })

    gsap.to(buttons[30], {
      opacity: 1,
      duration: 1,
      delay: 2,
      scrollTrigger: {
        start: `${height * 5 / 1.05}px 0px`,
        end: `${height * 5.95}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })
  }, [])

  return (
    <section id="reformaAndConstruction" className={styles.main}>
      <BoxInformation id="reformaAndConstruction" buttonPosition={24} textPosition={8} left="14vw" top="30vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />

      <BoxInformation id="reformaAndConstruction" buttonPosition={27} textPosition={9} left="48vw" bottom="28vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />

      <BoxInformation id="reformaAndConstruction" buttonPosition={30} textPosition={10} right="12vw" bottom="50vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" rightText='40px' alignText='end' />
    </section>
  )
}