import { useEffect } from 'react'
import styles from './../../styles/index/first.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Title from './../../svg/CONCEITU_AIR_TECH.svg'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)


export default function First() {

  useEffect(() => {

    gsap.to('#message', {
      paddingTop: "40vh",
      opacity: 1,
      duration: 0.75,
    })

  }, [])


  return (
    <section id="main" className={styles.main}>
      <div className={styles.message} id="message">
        <h1 className={styles.title}>
          CONCEITU AIR TECH
          <span>®</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum ipsum ex cum sint a necessitatibus aperiam. Nulla, nemo magni sapiente nihil ex ullam quo omnis ad exercitationem, illo eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque, labore tempore perferendis at provident totam tenetur eveniet ad aut sunt culpa qui, voluptate consequatur animi quos quod assumenda aperiam!
        </p>
      </div>
    </section >
  )
}