import styles from './../../styles/global/footer.module.scss'

import Link from 'next/link'

export default function Footer() {

  return (
    <footer className={styles.main}>
      <p> Conteitu Air Tech | Todos os direitos reservados © | <Link href="/politica-de-privacidade">Política de privacidade</Link></p>
      <p>Desenvolvido por <Link href="https://isaquesestudios.com.br">Isaques Estúdios</Link></p>
      <p>tecnologia usada <span>NEXT.JS</span></p>
    </footer>
  )
}