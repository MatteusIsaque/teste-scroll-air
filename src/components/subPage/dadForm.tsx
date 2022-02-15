import styles from './../../styles/subPages/dadForm.module.scss'

import Form from './form'

type dad = {
  title: string
  subTitle: string
  paragraph: string
  list: string[]
}

export default function DadForm({ title, subTitle, paragraph, list }: dad) {

  return (
    <div className={styles.main}>
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
        </div>
        <Form titleForm="Gostaria de receber uma
proposta para o seu negócio?" subTitleForm='A TIConnected® ira te auxiliar com as melhores proposta
e entregara um suporte completo desde a contratação
até a instalação e suporte com equipamentos.' />
      </div>
    </div>
  )
}