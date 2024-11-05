
type Training = {
  name: string;
  description: string;
  duration: string; 
  intensity: "Baixa" | "Média" | "Alta";
};

type Category = {
  name: string;
  icon: {
    library: "AntDesign" | "FontAwesome" | "MaterialIcons";
    name: string;
  };
  trainings: Training[];
};

export const categories: Category[] = [
  {
    name: "Cardio",
    icon: {
      library: "AntDesign",
      name: "heart",
    },
    trainings: [
      {
        name: "Corrida Leve",
        description: "Treino leve de corrida para iniciantes.",
        duration: "30 min",
        intensity: "Média",
      },
      {
        name: "HIIT para Cardio",
        description:
          "Treino de alta intensidade para melhorar o condicionamento cardiovascular.",
        duration: "20 min",
        intensity: "Alta",
      },
    ],
  },
  {
    name: "Força",
    icon: {
      library: "FontAwesome",
      name: "dumbbell",
    },
    trainings: [
      {
        name: "Treino de Peso Corporal",
        description:
          "Exercícios que utilizam o peso do corpo para fortalecimento.",
        duration: "45 min",
        intensity: "Média",
      },
      {
        name: "Circuito de Força",
        description: "Treino com pesos para desenvolvimento muscular.",
        duration: "30 min",
        intensity: "Alta",
      },
    ],
  },
  {
    name: "Flexibilidade",
    icon: {
      library: "MaterialIcons",
      name: "accessibility-new",
    },
    trainings: [
      {
        name: "Alongamento Matinal",
        description: "Série de alongamentos para começar bem o dia.",
        duration: "15 min",
        intensity: "Baixa",
      },
      {
        name: "Yoga para Flexibilidade",
        description: "Sessão de yoga para melhorar a flexibilidade e relaxar.",
        duration: "40 min",
        intensity: "Média",
      },
    ],
  },
  {
    name: "Treino Funcional",
    icon: {
      library: "FontAwesome",
      name: "running",
    },
    trainings: [
      {
        name: "Circuito Funcional",
        description: "Treino dinâmico para todo o corpo.",
        duration: "30 min",
        intensity: "Alta",
      },
      {
        name: "Movimentos de Base",
        description: "Treino focado nos movimentos naturais e posturais.",
        duration: "25 min",
        intensity: "Média",
      },
    ],
  },
  {
    name: "Treino em Casa",
    icon: {
      library: "AntDesign",
      name: "home",
    },
    trainings: [
      {
        name: "Treino com Garrafas",
        description: "Utilizando garrafas d'água como pesos alternativos.",
        duration: "20 min",
        intensity: "Baixa",
      },
      {
        name: "Treino no Quarto",
        description: "Exercícios fáceis para fazer no quarto ou sala.",
        duration: "30 min",
        intensity: "Média",
      },
    ],
  },
];
