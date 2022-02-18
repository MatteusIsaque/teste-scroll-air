import styles from './../../styles/architectureProject/end.module.scss'

export default function End() {

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.data}>
          <p>whatsapp: (99) 99999-9999</p>
          <p>whatsapp: (99) 99999-9999</p>
          <p>whatsapp: (99) 99999-9999</p>
          <p>email:contato@conceituairtech.com.br</p>

          <button>CHAMAR AGORA</button>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.576674177892!2d-46.759309249927!3d-23.655607084560756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53dad1d573c7%3A0xa8ab7a3c7ef49d1a!2sR.%20Rosa%20Hon%C3%B3ria%20de%20Jesus%20-%20Capao%20Redondo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005849-470!5e1!3m2!1spt-BR!2sbr!4v1645158676610!5m2!1spt-BR!2sbr" style={{ border: 0 }} loading="lazy"></iframe>
      </div>
      <div className={styles.blue}>

      </div>

    </div>
  )
}