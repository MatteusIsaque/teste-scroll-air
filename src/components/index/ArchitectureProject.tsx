import { useEffect } from 'react'
import BoxInformation from '../global/BoxInformation'
import styles from './../../styles/index/architectureProject.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function ArchitectureProject() {

  useEffect(() => {

    const buttons: any = gsap.utils.toArray('#serviceInformationButton')
    const height = window.innerHeight

    gsap.to(buttons[9], {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        start: `${height * 2 / 1.05}px 0px`,
        end: `${height * 3}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })
    gsap.to(buttons[6], {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        start: `${height * 2 / 1.05}px 0px`,
        end: `${height * 3}px ${height / 1.2}`,
        toggleActions: "restart restart restart none",
      }
    })
  }, [])


  return (
    <section id="architectureProject" className={styles.main}>
      <BoxInformation id="architectureProject" idButton="#ArchitectureProjectButton" buttonPosition={6} textPosition={2} left="24vw" bottom="30vh" leftText="44px" text="algoiiiiiiiiiiiiiiiiiii" />
      <BoxInformation id="architectureProject" idButton="#ArchitectureProjectButton" buttonPosition={9} textPosition={3} left="50vw" top="26vh" leftText="44px" text="algoiiiiiiiiiiiiiiiiiii" />
    </section>
  )
}