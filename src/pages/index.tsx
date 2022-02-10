import React from 'react';
import styles from '../styles/index/index.module.scss'

import { Link, Element } from 'react-scroll'

import First from '../components/index/First';
import InteriorDesigner from '../components/index/InteriorDesigner';
import ArchitectureProject from '../components/index/ArchitectureProject';
import Climate from '../components/index/Climate';
import Security from '../components/index/Security';
import ReformAndConstruction from '../components/index/ReformAndConstruction';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import gsap from 'gsap'

import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Index() {


  useEffect(() => {
    const elements: any = gsap.utils.toArray('#element')

    gsap.to(elements, {
      yPercent: - 100 * (elements.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#mainID",
        pin: true,
        scrub: 0.5,
        snap: 1 / (elements.length - 1) + 0.002,
      }
    });
  }, [])



  return (
    <main id="mainID" className={styles.main}>
      <nav className={styles.nav}>
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
        <ReformAndConstruction />
      </Element>

    </main>
  )
}
