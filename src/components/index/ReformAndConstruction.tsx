import BoxInformation from '../global/BoxInformation'
import styles from './../../styles/index/reformAndConstruction.module.scss'

import { gsap } from 'gsap'
import { useEffect } from 'react'

gsap.registerPlugin()

export default function ReformAndConstruction() {

  useEffect(() => {
    const buttons: any = gsap.utils.toArray('#serviceInformationButton')
    const height = window.innerHeight

    function animaBG(itemHover: any, Bg: string, clipPathHover: string, clipPathLeave: string) {
      const IDbg: any = document.getElementById(Bg)

      itemHover.addEventListener('mouseover', function () {

        gsap.to('#divText',
          {
            opacity: 0,
            duration: 1
          })

        IDbg.style.clipPath = `${clipPathHover}`
        IDbg.style.zIndex = '100'
      })

      itemHover.addEventListener('mouseleave', function () {
        gsap.to('#divText',
          {
            opacity: 1,
            duration: 1
          })

        IDbg.style.clipPath = `${clipPathLeave}`
        IDbg.style.zIndex = '1'
      })
    }

    animaBG(buttons[24], 'reform', 'polygon(0 0, 40% 0, 40% 100%, 0% 100%)', 'polygon(0 0, 35% 0, 20% 100%, 0% 100%)')

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

    animaBG(buttons[27], 'reformTwo', 'polygon(15% 0, 80% 0, 80% 100%, 15% 100%)', 'polygon(35% 0, 74% 0, 60% 100%, 20% 100%)')

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

    animaBG(buttons[30], 'building', 'polygon(54% 0, 100% 0, 100% 100%, 54% 100%)', 'polygon(74% 0, 100% 0, 100% 100%, 59% 100%)')

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

      <div id="reform" className={styles.reform}>
        <BoxInformation id="reformaAndConstruction" buttonPosition={24} textPosition={8} left="12vw" bottom="28vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />
      </div>

      <div id="reformTwo" className={styles.reformTwo}>
        <BoxInformation id="reformaAndConstruction" buttonPosition={27} textPosition={9} left="48vw" bottom="28vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" leftText='20px' alignText='end' />
      </div>

      <div id="building" className={styles.building}>
        <BoxInformation id="reformaAndConstruction" buttonPosition={30} textPosition={10} right="12vw" bottom="28vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" rightText='40px' alignText='end' />
      </div>

    </section>
  )
}