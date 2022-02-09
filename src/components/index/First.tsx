import { useEffect } from 'react'
import styles from './../../styles/index/first.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const title = gsap.timeline()
const button = gsap.timeline()


export default function First() {

  useEffect(() => {

    ScrollTrigger.create({
      trigger: "#main",
      start: "start",
      end: "+=1600",
      markers: true
    })
    
  }, [])


  return (
    <section id="main" className={styles.main}>
      <div className={styles.message} id="message">
        <h1>title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum ipsum ex cum sint a necessitatibus aperiam. Nulla, nemo magni sapiente nihil ex ullam quo omnis ad exercitationem, illo eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque, labore tempore perferendis at provident totam tenetur eveniet ad aut sunt culpa qui, voluptate consequatur animi quos quod assumenda aperiam!</p>
      </div>
    </section>
  )
}