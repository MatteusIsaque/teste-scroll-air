import styles from './../../styles/security/recentQuestions.module.scss'
import Questions from './questions'
import Quotation from './quotation'


export default function RecentQuestions() {
  
  return (
    <div className={styles.main}>
      <div className={styles.greenDiv} />

      <h3>Perguntas Frequentes</h3>
      <div className={styles.questions}>
        <Questions question='Qual velocidade da internet necessária para usar Voip?' response="Cada ramal utiliza uma média de 90kbps de download e upload por ligação, assim tendo uma internete com no minímo 10 mega sua empresa
podera usar até 10 ramais sem perca de qualidade em suas chamadas." />
        <Questions question='Minha empresa precisa de Voip?' response="A evolução da tecnologia vem acontecendo conforme à necessidade de maior agilidade na comunicação, associada à redução de custos com
manutenção, estrutura e a centralização das informações. Se sua empresa está em um nível onde usa 2 ou mais atendentes, sim a migração
ira te trazer economia e agilidade em seus processos diários." />
        <Questions question='Como funciona o PABX em Nuvem?' response="O sistema PABX em nuvem faz o armazenamento de dados em nuvem ao invés de ficar hospedado em servidores da empresa. Sua tecnologia
utilizar softwares instalados nos computadores, ele fica armazenado na nuvem e pode ser acessado pela internet, por meio do navegador e apps." />
        <Questions question='Posso realizar a portabilidade de um número? Qual sé o prazo?' response="Sim, você pode solicitar a portabilidade de um número ou solicitar um novo. O prazo para a portabilidade ira depender do provedor ao qual o
número está registrado. Entretanto a média pode ser de 2 a 5 dias úteis." />
      </div>
    <div className={styles.cotaçãoButton}>
      <button>Cotação</button>
    </div>
    </div>
  )
}