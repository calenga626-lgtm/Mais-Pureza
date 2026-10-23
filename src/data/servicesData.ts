export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  originalPrice: number;
  salePrice: number;
  savings: number;
  flyerImage: string;
  items: string[];
  featured?: boolean;
  notes?: string;
}

export interface IndividualService {
  id: string;
  name: string;
  price: string;
  numericMinPrice: number;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  flyerImage: string;
  services: IndividualService[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const COMPANY_CONTACTS = {
  name: 'Mais Pureza',
  subname: 'Higienização & Limpeza Profissional',
  owner: 'Kátia Catumbela',
  phone1: '+244 934 963 087',
  phone2: '+244 934 963 158',
  waNumber1: '244934963087',
  waNumber2: '244934963158',
  address: 'Rua Kateculo Mengo, Nº 79-A, 1º Andar – Alvalade, Maianga',
  city: 'Luanda, Angola',
  hours: 'Segunda a Sábado: 08:00 – 18:00',
  logo: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.36_0909d7ee.jpeg',
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'oferta-especial',
    name: 'Oferta Especial',
    badge: 'Mais Económico',
    tagline: 'Lave tudo de casa e gaste menos. Lavagem profissional no local.',
    originalPrice: 85000,
    salePrice: 50000,
    savings: 35000,
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.35__3__75c3b187.jpeg',
    items: [
      'Sofá de 3 ou 5 lugares',
      'Colchão casal ou king',
      '1 jogo de cortinas (leves ou pesadas)',
      '6 cadeiras + 1 puff'
    ],
    notes: 'Não tem estes itens? Personalizamos o serviço com os itens disponíveis na sua casa e mantemos o mesmo preço!'
  },
  {
    id: 'pacote-familia',
    name: 'Pacote Família',
    badge: 'O Mais Escolhido',
    tagline: 'A limpeza completa que toda casa precisa, num só dia! Poupe 30.000 Kz e renove a casa.',
    originalPrice: 95000,
    salePrice: 65000,
    savings: 30000,
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.33_f0bee7d1.jpeg',
    featured: true,
    items: [
      '1 Sofá de 3 lugares',
      '2 Jogos de cortinas leves',
      '6 Cadeiras simples',
      '2 Poltronas normais',
      '2 Colchões (1 casal + 1 solteiro)'
    ],
    notes: 'Ideal para apartamentos e moradias familiares. Uma única visita, toda a casa renovada.'
  },
  {
    id: 'pacote-conforto',
    name: 'Pacote Conforto',
    badge: 'Super Famílias',
    tagline: 'Limpeza profunda para famílias maiores. Tenha a casa limpa de uma só vez.',
    originalPrice: 146000,
    salePrice: 82000,
    savings: 64000,
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.33__1__2b7688e9.jpeg',
    items: [
      '1 Sofá de 5 lugares especial',
      '3 Colchões (1 casal + 2 solteiros)',
      '3 Jogos de cortinas leves',
      '2 Tapetes médios',
      '1 Tapete grande'
    ],
    notes: 'Eliminação profunda de ácaros, ácaros nos tapetes e tecidos de alto tráfego.'
  },
  {
    id: 'pacote-premium',
    name: 'Pacote Premium',
    badge: 'Hotel 5 Estrelas',
    tagline: 'Experiência completa de higienização digna de resort de luxo.',
    originalPrice: 223000,
    salePrice: 150000,
    savings: 73000,
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.34_00df84b4.jpeg',
    items: [
      '4 Jogos de cortinas (leves + pesadas)',
      '4 Camas completas (2 casal + 2 solteiro)',
      '1 Sofá 7 lugares',
      '2 Tapetes grandes',
      '8 Cadeiras estofadas',
      '4 Poltronas confortáveis'
    ],
    notes: 'Máxima capacidade de higienização com desinfeção antiviral e bactericida completa.'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'sofas',
    title: 'Higienização de Sofás',
    subtitle: 'O centro da sua sala revitalizado com tecnologia de extração e produtos certificados.',
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.34__3__3d077ffc.jpeg',
    services: [
      { id: 'sofa-1', name: 'Sofá de 1 Lugar', price: '7.500 / 10.000 Kz', numericMinPrice: 7500 },
      { id: 'sofa-2', name: 'Sofá de 2 Lugares', price: '15.000 Kz', numericMinPrice: 15000 },
      { id: 'sofa-3', name: 'Sofá de 3 Lugares', price: '20.000 Kz', numericMinPrice: 20000 },
      { id: 'sofa-4', name: 'Sofá de 4 Lugares', price: '25.000 Kz', numericMinPrice: 25000 },
      { id: 'sofa-5', name: 'Sofá de 5 Lugares', price: '30.000 Kz', numericMinPrice: 30000 },
      { id: 'sofa-6', name: 'Sofá de 6 Lugares', price: '35.000 Kz', numericMinPrice: 35000 },
      { id: 'sofa-7', name: 'Sofá de 7 Lugares', price: '40.000 Kz', numericMinPrice: 40000 },
      { id: 'sofa-8', name: 'Sofá de 8 Lugares', price: '45.000 Kz', numericMinPrice: 45000 },
    ]
  },
  {
    id: 'colchoes',
    title: 'Colchões & Almofadas',
    subtitle: 'Dormir bem começa com um colchão livre de ácaros, fungos e odores corporais.',
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.35_5601bafd.jpeg',
    services: [
      { id: 'almofada', name: 'Almofada', price: '2.000 / 3.000 Kz', numericMinPrice: 2000 },
      { id: 'colchao-solteiro', name: 'Colchão Solteiro', price: '12.000 Kz', numericMinPrice: 12000 },
      { id: 'colchao-solteiro-maior', name: 'Colchão Solteiro Maior', price: '14.000 Kz', numericMinPrice: 14000 },
      { id: 'colchao-casal', name: 'Colchão Casal', price: '16.000 Kz', numericMinPrice: 16000 },
      { id: 'colchao-king', name: 'Colchão King Size', price: '18.000 Kz', numericMinPrice: 18000 },
    ]
  },
  {
    id: 'camas',
    title: 'Camas & Estruturas Estofadas',
    subtitle: 'Higienização profunda da cabeceira e sommier para noites de puro bem-estar.',
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.35__1__27b9c40e.jpeg',
    services: [
      { id: 'cama-solteiro', name: 'Cama Solteiro Completa', price: '12.000 Kz', numericMinPrice: 12000 },
      { id: 'cama-casal', name: 'Cama Casal Completa', price: '16.000 Kz', numericMinPrice: 16000 },
      { id: 'cama-king', name: 'Cama King Completa', price: '18.000 Kz', numericMinPrice: 18000 },
    ]
  },
  {
    id: 'cortinas',
    title: 'Higienização de Cortinas',
    subtitle: 'Cortinas acumulam poeira do tráfego e odores sem que você perceba. Lavagem no local!',
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.35__2__4772c700.jpeg',
    services: [
      { id: 'cortina-leve', name: 'Jogo de Cortina Leve', price: '17.000 Kz', numericMinPrice: 17000 },
      { id: 'cortina-pesada', name: 'Cortina Pesada', price: '20.000 Kz', numericMinPrice: 20000 },
      { id: 'cortina-blackout', name: 'Cortina Blackout', price: '25.000 / 30.000 Kz', numericMinPrice: 25000 },
    ]
  },
  {
    id: 'poltronas-cadeiras',
    title: 'Cadeiras, Poltronas & Puffs',
    subtitle: 'Acento renovado para sua sala de jantar, escritório ou varanda com acabamento sedoso.',
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.26.34__1__76ae6ed9.jpeg',
    services: [
      { id: 'cadeira-simples', name: 'Cadeira Simples', price: '2.500 Kz', numericMinPrice: 2500 },
      { id: 'cadeira-especial', name: 'Cadeira Especial', price: '3.500 Kz', numericMinPrice: 3500 },
      { id: 'puff-pequeno', name: 'Puff Pequeno', price: '3.500 Kz', numericMinPrice: 3500 },
      { id: 'puff-normal', name: 'Puff Normal', price: '5.000 Kz', numericMinPrice: 5000 },
      { id: 'poltrona-normal', name: 'Poltrona Normal', price: '5.000 Kz', numericMinPrice: 5000 },
      { id: 'poltrona-especial', name: 'Poltrona Especial', price: '6.000 Kz', numericMinPrice: 6000 },
      { id: 'puff-especial', name: 'Puff Especial', price: '7.500 Kz', numericMinPrice: 7500 },
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Dra. Marlene V.',
    role: 'Médica Pediatra',
    location: 'Condomínio Alvalade, Luanda',
    rating: 5,
    date: 'Ontem',
    service: 'Pacote Família',
    quote: 'O meu filho de 4 anos sofria frequentemente de crises alérgicas respiratórias por causa da poeira. A equipa da Mais Pureza veio a minha casa e o resultado nos colchões e no sofá foi inacreditável. O cheiro é suave e a água que extraíram provou a quantidade de impurezas que respirávamos. Recomendo de olhos fechados!',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Eng. António Silva',
    role: 'Gestor de Projetos',
    location: 'Talatona, Luanda',
    rating: 5,
    date: 'Há 3 dias',
    service: 'Oferta Especial (50.000 Kz)',
    quote: 'Comprámos a Oferta Especial de 50.000 Kz pelo WhatsApp. Pontualidade exemplar, máquinas muito modernas e profissionais bem uniformizados. Tiraram nódoas de café antigas do nosso sofá cinza que pensávamos que nunca mais sairiam. Valeu cada Kwanza!',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Teresa Catraio',
    role: 'Empresária',
    location: 'Maianga, Luanda',
    rating: 5,
    date: 'Há 1 semana',
    service: 'Higienização de Cortinas & Camas',
    quote: 'A comodidade de não precisar de desmontar cortinas pesadas nem transportar colchões é impagável. Fizeram todo o trabalho com o maior cuidado e em poucas horas já estava seco e com toque aveludado. A Kátia e toda a equipa estão de parabéns!',
    verified: true
  },
  {
    id: 'test-4',
    author: 'Cláudio Ferreira',
    role: 'Advogado',
    location: 'Cidade do Kilamba',
    rating: 5,
    date: 'Há 2 semanas',
    service: 'Pacote Conforto',
    quote: 'Temos dois cães pequenos em casa e os odores no sofá eram uma dor de cabeça constante. A higienização profunda eliminou 100% dos odores e manchas. O pagamento no WhatsApp por Multicaixa Express foi super prático.',
    verified: true
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como funciona a compra e o pagamento pelo WhatsApp?',
    answer: 'É extremamente simples e seguro: você escolhe o pacote ou serviço desejado neste site, clica no botão "Agendar no WhatsApp" e é direcionado com a mensagem pronta para a nossa equipa. Você pode efetuar o pagamento via Multicaixa Express ou Transferência Bancária (BAI, BFA, BIC) ou no local com o terminal de pagamento.'
  },
  {
    question: 'Quanto tempo demora para secar após a higienização?',
    answer: 'Graças aos nossos equipamentos de extração profissional de alta sucção alemã, cerca de 90% dos líquidos são extraídos instantaneamente. Os estofos ficam apenas ligeiramente húmidos e secam completamente num período entre 2 a 4 horas em ambiente com ventilação natural.'
  },
  {
    question: 'Os produtos utilizados são seguros para bebés e animais de estimação?',
    answer: 'Sim, 100%! Utilizamos formulações de grau hospitalar biodegradáveis e certificadas, antialérgicas, sem solventes agressivos ou cloro. São perfeitamente seguras para crianças pequenas, idosos, gestantes e animais de estimação.'
  },
  {
    question: 'Vocês atendem em todas as zonas de Luanda ao domicílio?',
    answer: 'Sim! A nossa equipa desloca-se diretamente à sua residência ou empresa com toda a maquinaria profissional em Alvalade, Maianga, Talatona, Miramar, Kilamba, Benfica, Samba, Morro Bento, Mutamba, Viana e arredores.'
  },
  {
    question: 'Não tenho todos os itens da Oferta Especial, posso trocar por outros?',
    answer: 'Com certeza! Como destacamos nos nossos termos oficiais: "Não tem estes itens? Personalizamos o serviço com os itens disponíveis na sua residência e mantemos o mesmo preço promocional". Basta informar o que possui pelo WhatsApp.'
  },
  {
    question: 'As manchas difíceis e odores de mofo e pets saem com a lavagem?',
    answer: 'Sim. Empregamos detergentes enzimáticos e neutralizadores de odores que soltam as sujidades impregnadas nas fibras profundas, eliminando manchas de gordura, suor, café, mofo e resíduos orgânicos, devolvendo a cor original do tecido.'
  }
];

export function buildWhatsAppLink(phone: string, text: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
