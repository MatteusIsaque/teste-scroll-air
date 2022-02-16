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
    <>
      <div id="divText" className={styles.divText}>
        <div className={styles.text}>
          <h1>Reforma e Construção</h1>
          <p>Conte com uma equipe multidisciplinar para desenvolver projetos completos e sob medida para você. Planejamos todos os detalhes de seus projetos sem dor de cabeça, descomplicando as etapas até a execução da obra e entrega.</p>
        </div>
      </div>

      <section id="reformaAndConstruction" className={styles.main}>

        <div id="reform" className={styles.reform}>
          <BoxInformation id="reformaAndConstruction" buttonPosition={24} textPosition={8} left="12vw" bottom="28vh" text="Reforma e construção" leftText='20px' topText='10px' alignText='end' MaxWidthText={200} textButton="CONHEÇA MAIS" />
        </div>

        <div id="reformTwo" className={styles.reformTwo}>
          <BoxInformation id="reformaAndConstruction" buttonPosition={27} textPosition={9} left="48vw" bottom="28vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" rightText='34px' alignText='end' textButton="Reforma e construção" MaxWidthText={400} />
        </div>

        <div id="building" className={styles.building}>
          <BoxInformation id="reformaAndConstruction" buttonPosition={30} textPosition={10} right="12vw" bottom="28vh" text="wqeqweq we qwiei qewui fiewquh uiqwehf uiwqe iquewh" rightText='40px' textButton="Engenheiro eletricista" MaxWidthText={400} alignText='end' />
        </div>

      </section>
    </>
  )
}