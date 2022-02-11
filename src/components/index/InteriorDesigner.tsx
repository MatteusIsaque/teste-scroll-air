import styles from './../../styles/index/interiorDesigner.module.scss'
import BoxInformation from './../global/BoxInformation'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)

export default function InteriorDesigner() {
  useEffect(() => {

    const buttons: any = gsap.utils.toArray('#serviceInformationButton')
    const height = window.innerHeight


    gsap.to(buttons[0], {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        start: `0px 0px`,
        end: `${height * 2.8}px ${height / 1.2}`,
        toggleActions: "restart reset restart none",
      }
    })

    gsap.to(buttons[3], {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        start: `0px 0px`,
        end: `${height * 2.8}px ${height / 1.2}`,
        toggleActions: "restart reset restart none",
      }
    })

  }, [])

  return (
    <section id="interiosDesignerMain" className={styles.main}>
      <BoxInformation
        id="interiosDesignerMain"
        buttonPosition={0}
        textPosition={0}
        top="20vh"
        left="14vw"
        leftText="40px"
        text="ewquhr uiqwe uqwehrqiuwh iuqhwru qhufahsu fhausfh uehiaudshuh fquiwe hfuqiwehfquiwehfaiudshfquiw eui uq iweqfuqiwefuiwhfiuads uhwefiuqeua"
      />
      <BoxInformation
        id="interiosDesignerMain"
        buttonPosition={4}
        textPosition={1}
        bottom="20vh"
        right="14vw"
        rightText="40px"
        alignText="end"
        text="ewquhr uiqwe uqwehrqiuwh iuqhwru qhufahsu fhausfh uehiaudshuh fquiwe hfuqiwehfquiwehfaiudshfquiw eui uq iweqfuqiwefuiwhfiuads uhwefiuqeua"
      />
    </section>
  )
}