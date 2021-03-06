import { useEffect } from 'react'
import styles from './../../styles/global/boxInformation.module.scss'

import gsap from 'gsap'
import { setTimeout } from 'timers'

type DadBoxInformation = {
  id?: any
  idButton?: any,

  buttonPosition: any
  textPosition: any

  top?: string
  left?: string
  right?: string
  bottom?: string

  text?: string

  leftText?: string
  rightText?: string
  bottomText?: string
  topText?: string
  alignText?: any
  MaxWidthText?: number


  textButton?: string
}

export default function BoxInformation({ id, buttonPosition, textPosition, top, left, right, bottom, leftText, rightText, bottomText, topText, MaxWidthText, alignText, text, textButton }: DadBoxInformation) {

  useEffect(() => {
    const itens: any = document.querySelectorAll('#serviceInformationButton')
    const BackgroundItem: any = document.querySelector(`#${id}`)
    const serviceInformationText: any = document.querySelectorAll('#serviceInformationText')
    const tl = gsap.timeline()

    itens[buttonPosition].addEventListener('mouseover', function () {

      serviceInformationText[textPosition].style.display = "block"
      BackgroundItem.style.filter = "brightness(90%)"

      itens.forEach((i: any) => {
        i.style.animationPlayState = 'paused'
      })
    })

    itens[buttonPosition].addEventListener('mouseout', function () {

      serviceInformationText[textPosition].style.display = 'none'
      BackgroundItem.style.filter = "brightness(100%)"

      itens.forEach((i: any) => {
        i.style.animationPlayState = 'running'
      })
    })

  }, [])

  return (
    <div id='serviceInformationButton' className={styles.main} style={{ top: top, left: left, right: right, bottom: bottom }}>
      <div id='serviceInformationButton' className={styles.majorLine}>
        <div id='serviceInformationButton' className={styles.minorRow} ></div>
      </div>
      <p id="serviceInformationText" className={styles.information} style={{ left: leftText, right: rightText, bottom: bottomText, top: topText, width: MaxWidthText, textAlign: alignText }}>
        {text}
        <button>{textButton}</button>
      </p>
    </div>
  )
}