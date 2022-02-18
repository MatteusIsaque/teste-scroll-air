import styles from './../../styles/architectureProject/slide.module.scss'
import Carousel from "react-multi-carousel";
import Image from 'next/image'

import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';

type PropsSlide = {
  imagesURL: any[]
}

export default function Slide({ imagesURL }: PropsSlide) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    }
  }

  return (
    <article className={styles.main}>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {
          imagesURL.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} />
              </div>
            )
          })
        }
      </Carousel>
    </article>
  )
}