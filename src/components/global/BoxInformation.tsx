import { useEffect } from 'react'
import styles from './../../styles/global/boxInformation.module.scss'

type DadBoxInformation = {
  top?: string
  left?: string
  right?: string
  bottom?: string
  id?: any
}

export default function BoxInformation({ top, left, right, bottom, id }: DadBoxInformation) {

  useEffect(() => {
    const itens: any = document.querySelectorAll('#serviceInformationButton')
    const BackgroundItem: any = document.querySelector(`#${id}`)



    itens[0].addEventListener('mouseover', function () {

      BackgroundItem.style.filter = "brightness(80%)"

      itens.forEach((i: any) => {
        console.log(i)
        i.style.animationPlayState = 'paused'
      })
    })

    itens[0].addEventListener('mouseout', function () {
      BackgroundItem.style.filter = "brightness(100%)"

      // window.alert('saiu')
      itens.forEach((i: any) => {
        console.log(i)
        i.style.animationPlayState = 'running'
      })
    })
  }, [])

  return (
    <div id="serviceInformationButton" className={styles.main} style={{ top: top, left: left, right: right, bottom: bottom }}>
      <div id="serviceInformationButton" className={styles.majorLine}>
        <div id="serviceInformationButton" className={styles.minorRow} ></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci quaerat perspiciatis, aspernatur natus at dolorum aut. Sequi distinctio officiis cumque tenetur, illum vitae, neque velit ratione deserunt, debitis sed!
      </p>
    </div>
  )
}