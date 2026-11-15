export interface Plan {
  id: string;
  name: string;
  badge?: string;
  screens: number;
  period: string;
  price: number;
  priceFormatted: string;
  monthlyEquivalent?: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export const siteConfig = {
  name: 'Sports Stream Pro',
  domain: 'sportsstream.com.br',
  siteUrl: 'https://sportsstream.com.br',
  tagline: 'IPTV 2 Telas Simultâneas Em 4K Ultra HD',
  description: 'Assine IPTV 2 telas simultâneas para assistir canais ao vivo, futebol, UFC, NBA, filmes, séries e desenhos em Full HD e 4K na Smart TV, celular e TV Box.',
  whatsapp: {
    number: '5511972008717',
    display: '(11) 97200-8717',
    defaultMessage: 'Olá! Gostaria de solicitar meu teste grátis de 4 horas no Sports Stream Pro (2 Telas em 4K).',
    planMessage: (planName: string, price: string) =>
      `Olá! Quero assinar o *${planName}* de *${price}* no Sports Stream Pro. Como faço a ativação imediata via PIX?`
  },
  plans: [
    {
      id: 'mensal-1tela',
      name: 'Plano Mensal 1 Tela',
      screens: 1,
      period: '/mês',
      price: 25.00,
      priceFormatted: 'R$ 25,00',
      description: 'Ideal para quem assiste individualmente com qualidade máxima 4K.',
      features: [
        '1 Tela Simultânea',
        '+2.500 Canais Ao Vivo em 4K/FHD',
        '+85.000 Filmes e Séries On Demand',
        'Futebol, UFC, NBA e F1 Sem Delay',
        'Guia de Programação (EPG)',
        'Suporte VIP via WhatsApp',
        'Sem fidelidade ou multas'
      ]
    },
    {
      id: 'mensal-2telas',
      name: 'Plano Mensal 2 Telas VIP',
      badge: 'MAIS POPULAR ⭐',
      screens: 2,
      period: '/mês',
      price: 30.00,
      priceFormatted: 'R$ 30,00',
      popular: true,
      description: 'Assista na sala e no quarto ao mesmo tempo sem travar. O melhor custo-benefício!',
      features: [
        '🔥 2 Telas Simultâneas Liberadas',
        '+2.500 Canais Ao Vivo em 4K/FHD',
        '+85.000 Filmes e Séries On Demand',
        'Todos os Jogos e Lutas sem Travamentos',
        'Canais Infantis e Notícias 24 Horas',
        'Servidor CDN Dedicado Anti-Freeze',
        'Suporte Prioritário 24/7 via WhatsApp'
      ]
    },
    {
      id: 'trimestral-2telas',
      name: 'Plano Trimestral 2 Telas',
      badge: 'ECONOMIZE R$ 20',
      screens: 2,
      period: '/trimestre',
      price: 70.00,
      priceFormatted: 'R$ 70,00',
      monthlyEquivalent: 'R$ 23,33/mês',
      description: 'Três meses de diversão garantida para toda a casa em 2 telas.',
      features: [
        '🔥 2 Telas Simultâneas Liberadas',
        'Validade de 90 dias garantida',
        '+2.500 Canais Ao Vivo em 4K/FHD',
        '+85.000 Filmes e Séries On Demand',
        'Futebol, UFC, F1 e NBA sem delay',
        'Servidor CDN com 99.9% Uptime',
        'Ativação Imediata via PIX'
      ]
    },
    {
      id: 'anual-2telas',
      name: 'Plano Anual 2 Telas VIP',
      badge: 'MELHOR OFERTA (33% OFF)',
      screens: 2,
      period: '/ano',
      price: 240.00,
      priceFormatted: 'R$ 240,00',
      monthlyEquivalent: 'R$ 20,00/mês',
      description: '1 ano inteiro sem se preocupar com faturas. Equivale a apenas R$ 20 por mês!',
      features: [
        '🔥 2 Telas Simultâneas por 365 Dias',
        'Economia total de R$ 120 no ano',
        'Acesso VIP irrestrito a todo o catálogo',
        'Transmissões Esportivas em 4K 60FPS',
        'Garantia total de funcionamento',
        'Atendimento e suporte VIP prioritário',
        'Ativação Instantânea em 3 minutos'
      ]
    }
  ] as Plan[],
  sportsCategories: [
    {
      title: 'Futebol Completo',
      icon: '⚽',
      description: 'Brasileirão Série A e B, Copa do Brasil, Libertadores, Champions League, Premier League e Estaduais sem delay.',
      badge: 'AO VIVO EM 4K'
    },
    {
      title: 'Lutas & UFC',
      icon: '🥊',
      description: 'Todos os cards numerados do UFC, Fight Nights, Bellator, Boxe Internacional e eventos mundiais sem custo extra.',
      badge: 'CARDS COMPLETOS'
    },
    {
      title: 'Automobilismo & F1',
      icon: '🏎️',
      description: 'Temporada completa de Fórmula 1, Stock Car, MotoGP e 24h de Le Mans com narração em português e câmeras de bordo.',
      badge: '60 FPS ESTÁVEL'
    },
    {
      title: 'NBA & Basquete',
      icon: '🏀',
      description: 'Todos os jogos da temporada regular da NBA, Playoffs, Finais, All-Star Game e NBB em alta definição.',
      badge: 'TRANSMISSÃO TOTAL'
    }
  ],
  testimonials: [
    {
      name: 'Marcos Vinícius S.',
      location: 'São Paulo - SP',
      role: 'Cliente há 8 meses',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
      comment: 'Sensacional! Assisto os jogos do Brasileirão na Smart TV da sala e minha esposa assiste a novela no quarto sem travar nada. Vale muito a pena o plano de 2 telas!'
    },
    {
      name: 'Camila Rodrigues',
      location: 'Curitiba - PR',
      role: 'Cliente há 1 ano',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      comment: 'Cancelei minha TV a cabo tradicional e estou economizando mais de R$ 200 por mês. Os canais infantis salvam os fins de semana com as crianças e a qualidade 4K é perfeita.'
    },
    {
      name: 'Ricardo Silveira',
      location: 'Belo Horizonte - MG',
      role: 'Cliente há 5 meses',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      comment: 'O suporte no WhatsApp me atendeu em menos de 2 minutos e instalou tudo na minha TV Samsung. UFC e Libertadores rodam liso sem aquele delay irritante.'
    }
  ],
  faq: [
    {
      question: 'Como funciona o teste grátis de 4 horas?',
      answer: 'Basta clicar no botão de teste grátis e falar com nosso time no WhatsApp. Nós enviamos o link e o login na hora para você testar todos os canais, jogos e filmes na sua Smart TV ou celular antes de pagar qualquer valor.'
    },
    {
      question: 'O plano de 2 telas funciona mesmo em dois aparelhos diferentes?',
      answer: 'Sim! Com o Plano de 2 Telas VIP você pode assistir simultaneamente na TV da sala e no quarto, ou na TV e no celular fora de casa ao mesmo tempo, sem bloqueios ou quedas.'
    },
    {
      question: 'Preciso comprar algum aparelho especial?',
      answer: 'Não! Nosso sistema roda diretamente em Smart TVs (Samsung, LG, Philips, TCL, etc.), TV Box, Amazon Fire TV Stick, celulares Android/iOS, computadores e tablets. Enviamos o aplicativo pronto e o passo a passo ilustrado.'
    },
    {
      question: 'Trava em dias de clássicos do futebol ou lutas do UFC?',
      answer: 'Não. Utilizamos infraestrutura CDN dedicada de alta capacidade com servidores balanceados e tecnologia anti-congelamento, mantendo transmissão estável mesmo com pico de dezenas de milhares de usuários simultâneos.'
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer: 'Aceitamos PIX com ativação instantânea em menos de 3 minutos, além de cartões de crédito e boleto bancário.'
    }
  ]
};
