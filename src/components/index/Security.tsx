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

    function animaBG(itemHover: any, Bg: string, clipPathHover: string, clipPathLeave: string) {
      const IDbg: any = document.getElementById(Bg)
      
      itemHover.addEventListener('mouseover', function () {
        IDbg.style.clipPath = `${clipPathHover}`
        IDbg.style.zIndex = '999999'
      })
      
      itemHover.addEventListener('mouseleave', function () {
        IDbg.style.clipPath = `${clipPathLeave}`
        IDbg.style.zIndex = '1'
      })
    }

    animaBG(buttons[15], 'fence', 'polygon(0 0, 40% 0, 40% 100%, 0% 100%)', 'polygon(0 0, 35% 0, 20% 100%, 0% 100%)')

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

    animaBG(buttons[18], 'camera', 'polygon(15% 0, 80% 0, 80% 100%, 15% 100%)', 'polygon(35% 0, 74% 0, 60% 100%, 20% 100%)')

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

    animaBG(buttons[21], 'lock', 'polygon(54% 0, 100% 0, 100% 100%, 54% 100%)', 'polygon(74% 0, 100% 0, 100% 100%, 59% 100%)')

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
      <div id="fence" className={styles.fence}>
        <BoxInformation id="securityMain" buttonPosition={15} textPosition={5} left="10vw" bottom="40vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />
      </div>
      <div id="camera" className={styles.camera}>
        <BoxInformation id="securityMain" buttonPosition={18} textPosition={6} left="45vw" bottom="40vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />
      </div>
      <div id="lock" className={styles.lock}>
        <BoxInformation id="securityMain" buttonPosition={21} textPosition={7} right="16vw" bottom="40vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" rightText='40px' alignText='end' />
      </div>


    </section>
  )
}
