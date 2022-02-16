import { useEffect } from 'react'
import BoxInformation from '../global/BoxInformation'
import styles from './../../styles/index/climate.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Climate() {

  useEffect(() => {

    const buttons: any = gsap.utils.toArray('#serviceInformationButton')
    const height = window.innerHeight

    buttons[12].addEventListener('mouseover', function () {
      gsap.to('#divText',
        {
          opacity: 0,
          duration: 0.5
        })
    })
    buttons[12].addEventListener('mouseleave', function () {
      gsap.to('#divText',
        {
          opacity: 1,
          duration: 0.5
        })
    })

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
    <>
      <div id="divText" className={styles.text}>
        <h2>
          AR CONDICIONADO
        </h2>
        <p>
          Soluções especializadas em ar condicionado, instalação, manutenção e reparo.
        </p>
      </div>
      <section id="climateMain" className={styles.main}>
        <BoxInformation id="climateMain" buttonPosition={12} textPosition={4} right="38vw" bottom="36vh" text="Nossa equipe técnica é formada por engenheiros mecânicos com especialização comprovada em sistemas de ar condicionado, garantindo ao cliente a contratação de serviços de acordo com as principais normas nacionais e internacionais, legislações brasileiras e boas práticas de engenharia." rightText='40px' MaxWidthText={640} textButton="SAIBA MAIS" alignText='end' />
      </section>
    </>
  )
}