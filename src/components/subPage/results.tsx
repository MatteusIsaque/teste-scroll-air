import styles from './../../styles/subPages/results.module.scss'

import CardResult from "./cardResults"

type resultsType = {
  title: string
  paragraph: string
}

export default function Results({ title, paragraph }: resultsType) {


  return (
    <div className={styles.main}>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <div className={styles.mainDiv}>
        <CardResult title="Flexibilidade"
          paragraphOne="Mude do escritório para casa, de uma chamada
ou chat para videoconferência e de um 
dispositivo para outro."
          paragraphTwo="Resolva problemas antes que eles apareçam
    com análises e painéis de administração
    avançados."
          paragrapThree="Reduza custos de viagens, treinamentos,
      operações e hardware/software."
        />
        <CardResult title="Qualidade de atendimento"
          paragraphOne="Mantenha a equipe essencial in loco e permita que
        todos os outros trabalhem remotamente."
          paragraphTwo="Nunca mais perca uma chamada. O recurso de
        atendentes virtuais encaminha os pacientes para a
        pessoa certa, sem ocupar a equipe."
          paragrapThree="Integre o GoToConnect ao seu sistema de prontuário
        médico para ver informações relevantes do paciente
        para todas as chamadas recebidas em tempo real."
        />
        <CardResult title="Segurança e Acesso"
          paragraphOne="Mude do escritório para casa, de uma chamada
        ou chat para videoconferência e de um 
        dispositivo para outro."
          paragraphTwo="Resolva problemas antes que eles apareçam
        com análises e painéis de administração
        avançados."
          paragrapThree="Reduza custos de viagens, treinamentos,
        operações e hardware/software."
        />
        <CardResult title="Eficiente"
          paragraphOne="Gravações de chamadas, logs de chamadas automatizados
        e transcrições de vídeo facilitam a documentação de cada
        comunicação com o cliente."
          paragraphTwo="A sistemas de gestão de patrimônio para ver informações
        relevantes do cliente e poder tratar cada um deles como
        um cliente VIP."
          paragrapThree="Economize tempo e viagens ao respaldar o trabalho remoto
        com aplicativos móveis e para desktop para todas as suas
        comunicações."
        />
      </div>
    </div>
  )
}