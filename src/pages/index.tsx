import React from 'react';
import styles from '../styles/index/index.module.scss'

import { Link, Element } from 'react-scroll'

import First from '../components/index/First';
import InteriorDesigner from '../components/index/InteriorDesigner';
import ArchitectureProject from '../components/index/ArchitectureProject';
import Climate from '../components/index/Climate';
import Security from '../components/index/Security';
import ReformAndConstruction from '../components/index/ReformAndConstruction';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai'

import { BsArrowDown } from 'react-icons/bs'

import { useEffect } from 'react'
import End from '../components/index/End';

gsap.registerPlugin(ScrollTrigger)

export default function Index() {


  useEffect(() => {
    const elements: any = gsap.utils.toArray('#element')

    const height = window.innerHeight


    // const tl = gsap.timeline()

    // console.log(elements.length)

    // tl.to(elements[0], {
    //   yPercent: - 100
    // })
    // tl.to(elements[1], {
    //   yPercent: - 100
    // })
    // tl.to(elements[2], {
    //   yPercent: - 100
    // })
    // tl.to(elements[3], {
    //   yPercent: - 100
    // })
    // tl.to(elements[4], {
    //   yPercent: - 100
    // })

    // ScrollTrigger.create({
    //     trigger: "#mainID",
    //     // end: `${height * elements.length - 1}`,
    //     pin: true,
    //     start: "-10px top",
    //     end:"+=3500",
    //     scrub: 1,
    //     snap: 1 / (elements.length - 1) + 0.002,

    // })

    gsap.to(elements, {
      yPercent: - 100 * (elements.length - 1),
      // animation: tl,
      ease: "none",
      scrollTrigger: {
        trigger: "#mainID",
        end: `${height * elements.length - 1}`,
        pin: true,
        scrub: 1,
        snap: 1 / (elements.length - 1) + 0.002,
      }
    });
  }, [])



  return (
    <main id="mainID" className={styles.main}>

      <nav className={styles.nav}>
        <div className={styles.social}>
          <AiOutlineInstagram />
          <span />
          <AiOutlineFacebook />
          <span />
          <AiOutlineWhatsApp />
        </div>

        <ul>
          <li>
            <Link activeClass='active' className="buttonNav" to="primeiro" spy={true} smooth={true}>
              a
            </Link>
          </li>
          <li>
            <Link activeClass='active' className="buttonNav" to="segundo" spy={true} smooth={true}>
              o
            </Link>
          </li>
          <li>
            <Link activeClass='active' className="buttonNav" to="terceiro" spy={true} smooth={true}>
              o
            </Link>
          </li>
          <li>
            <Link activeClass='active' className="buttonNav" to="quarto" spy={true} smooth={true}>
              o
            </Link>
          </li>
          <li>
            <Link activeClass='active' className="buttonNav" to="quinto" spy={true} smooth={true}>
              o
            </Link>
          </li>
          <li>
            <Link activeClass='active' className="buttonNav" to="sexto" spy={true} smooth={true}>
              o
            </Link>
          </li>
          <li>
            <Link activeClass='active' className="buttonNav" to="sétimo" spy={true} smooth={true}>
              o
            </Link>
          </li>
        </ul>

        <div className={styles.arrow}>
          <BsArrowDown />
        </div>
      </nav>

      <Element name='primeiro' id="element">
        <First />
      </Element>

      <Element name='segundo' id="element" >
        <InteriorDesigner />
      </Element>

      <Element name="terceiro" id="element">
        <ArchitectureProject />
      </Element>

      <Element name="quarto" id="element">
        <Climate />
      </Element>

      <Element name="quinto" id="element">
        <Security />
      </Element>

      <Element name="sexto" id="element">
        <ReformAndConstruction />
      </Element>

      <Element name="sétimo" id="element">
        <End />
      </Element>

    </main>
  )
}
