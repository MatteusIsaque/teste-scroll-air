import styles from './../../styles/index/interiorDesigner.module.scss'
import BoxInformation from './../global/BoxInformation'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)

export default function InteriorDesigner() {
  useEffect(() => {


  }, [])

  return (
    <section id="interiosDesignerMain" className={styles.main}>
      <BoxInformation id="interiosDesignerMain" top="20vh" left="14vw" />
    </section>
  )
}