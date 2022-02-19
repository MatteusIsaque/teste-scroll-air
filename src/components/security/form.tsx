import styles from './../../styles/security/form.module.scss'

import { useState } from 'react'

type dadForm = {
  titleForm: string
  subTitleForm: string
}

export default function Form({ titleForm, subTitleForm }: dadForm) {
  const [name, setName] = useState('')

  return (
    <form className={styles.Form}>
      <h2>{titleForm}</h2>
      <p>{subTitleForm}</p>
      <input className={styles.name} type="text" placeholder="Nome Completo" required onChange={(e) => { setName(e.target.value) }} />
      <div className={styles.divForm}>
        <div>
          <input type="email" placeholder="Email:" />
          <input type="text" placeholder="Estado:" />
          <input type="text" placeholder="Quantidade de ramais:" />
        </div>
        <div>
          <input type="text" placeholder="Telefone:" />
          <input type="text" placeholder="Cidade:" />
          <input type="text" placeholder="Nome da empresa:" />
        </div>
      </div>
      <textarea placeholder="Nos conte mais sobre sua procura, iremos preparar um orçamento para você."></textarea>
      <div className={styles.radio} style={{ marginTop: "20px" }}>
        <input type="radio" value="concordo" required /> Concordo em permitir que a TiConected tenha acesso aos meus dados
        para me responder com proposta promocional referente ao
        meu pedido.
      </div>
      <div className={styles.radio} style={{ marginBottom: "20px" }}>
        <input type="radio" value="concordo" required /> Concordo com os termos de uso e política de privacidade.
      </div>
      <button style={{ backgroundColor: "" }}>OBTER COTAÇÃO</button>
    </form>
  )
}