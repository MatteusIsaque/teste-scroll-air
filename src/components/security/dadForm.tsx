import styles from './../../styles/security/dadForm.module.scss'

import Form from './form'

import arCondicionado from './../../image/subPages/ar-condicionado.jpg'

type dad = {
  title?: string
  subTitle?: string
  paragraph?: string
  list: string[]
  color?: string
  paragraphTwo?: string
  textButton?: string
}

export default function DadForm({ title, subTitle, paragraph, paragraphTwo, textButton, list, color }: dad) {

  return (
    <div style={{ backgroundColor: color }} id="climatização" className={styles.main}>
      <div className={styles.subMain}>
        <div className={styles.text}>
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
          <p>{paragraph}</p>
          <div>
            {list.map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </div>
          <p style={{marginTop: '20px'}}>{paragraphTwo}</p>
          <button>{textButton}</button>
        </div>
        <Form titleForm="Gostaria de receber uma proposta da ConceituAir Tech®?
" subTitleForm='A ConceituAir Tech® irá te auxiliar com as melhores propostas e entregar um suporte completo desde a contratação até a instalação e suporte com equipamentos.' />
      </div>
    </div>
  )
}