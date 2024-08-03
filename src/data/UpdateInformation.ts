export const melhorias = [
  {
    titulo: "Gerenciamento de Histórico",
    descricoes: [
      "O histórico de pesquisas é agora armazenado localmente no navegador, garantindo que os dados sejam mantidos entre sessões. Isso é feito através do uso de localStorage.",
      "Implementada a funcionalidade para excluir itens individuais do histórico com feedback visual.",
    ],
  },
  {
    titulo: "Interface de Usuário",
    descricoes: [
      "Melhoria na visualização de dados com uma interface de usuário limpa e responsiva.",
      " Adicionada uma tela de carregamento para buscar a localização do usuário de forma visualmente agradável enquanto a localização está sendo determinada.",
    ],
  },
  {
    titulo: "Integração com API e Mapas",
    descricoes: [
      "Integração com a API de CEP para buscar e exibir informações detalhadas sobre o endereço com base no CEP fornecido.",
      "Implementada a funcionalidade para obter e exibir o endereço baseado na localização atual do usuário, utilizando a API do Google Maps.",
    ],
  },
  {
    titulo: "Componentes e Interações",
    descricoes: [
      "Adicionado um componente para exibir o histórico de pesquisas com a capacidade de visualizar mais detalhes e opções para cada item.",
      "Melhoria na interação com o usuário através de popups e mensagens de feedback (toast) para indicar ações bem-sucedidas ou erros.",
    ],
  },
  {
    titulo: "Estilização e Experiência do Usuário",
    descricoes: [
      "Adicionados tooltips para fornecer informações adicionais ao usuário sobre ações possíveis, como copiar endereços ou visualizar mais detalhes.",
      "Estilização aprimorada dos componentes para uma experiência mais intuitiva e visualmente agradável, com transições suaves e elementos interativos.",
    ],
  },
]

export const caracteristicas = [
  "Permite a busca de informações detalhadas sobre um CEP e exibe os resultados com a opção de copiar para a área de transferência.",
  "Exibe um histórico de pesquisas realizadas, com a capacidade de visualizar e remover itens.",
  "Função para buscar e exibir o endereço baseado na localização atual do usuário, com feedback visual de carregamento.",
  "Design adaptado para diferentes tamanhos de tela e dispositivos, garantindo uma experiência de usuário consistente.",
]
