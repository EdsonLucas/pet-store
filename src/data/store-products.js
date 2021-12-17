import AnimalLogoShop from '~/assets/images/animal-shop-logo.png';
import FunnyGoatShop from '~/assets/images/funny-goat-logo.png';

const StoreProductsList = [
  {
    id: 0,
    name: 'Animal Shop',
    avatar: AnimalLogoShop,
    heightAvatar: 68,
    widthAvatar: 71,
    address: 'Avenida luciano das neves, 2418',
    category: 'Produtos variados',
    distance: '5 km',
    deliveryPrice: 'Entrega Grátis',
    products: [
      {
        productListTitle: 'Rações',
        productList: [
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1633722524438.jpg',
            name: 'Ração premier raças específicas golden retriever',
            price: 214.99,
            category: 'Cachorro',
            sabor: 'Frango',
            tipo: 'Ração',
            especificacao: {
              linha: 'Premium',
              porte_raca: 'Médio e grande',
              peso: '12 kg',
              idade: 'Adulto',
            },
            description:
              'A golden power training é o alimento ideal para você oferecer ao seu peludo para repor as energias vitais de seu organismo.',
          },
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1562337416740.jpg',
            name: 'Ração golden para gatos adultos sabor frango',
            price: 24.99,
            category: 'Gato',
            sabor: 'Frango',
            tipo: 'Ração',
            especificacao: {
              linha: 'Premium',
              porte_raca: 'Pequeno',
              peso: '1 kg',
              idade: 'Adulto',
            },
            description:
              'Para garantir toda essa energia e vitalidade, é necessário oferecer um alimento que possua as substâncias que os manterão sempre fortes e ativos, como a ração golden gatos.',
          },
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1564666231665.jpg',
            name: 'Ração golden para gatos adultos sabor salmão',
            price: 27.99,
            category: 'Gato',
            sabor: 'Salmão',
            tipo: 'Ração',
            especificacao: {
              linha: 'Premium',
              porte_raca: 'Pequeno',
              peso: '1 kg',
              idade: 'Adulto',
            },
            description:
              'Essa ração para gato adulto castrado é desenvolvida com a qualidade dos alimentos premier pet e faz parte do catálogo dessa que é uma das principais empresas do segmento de nutrição animal.',
          },
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1633436835714.jpg',
            name: 'Alimento pássaro petz extrusado natural para calopsita - 300g',
            price: 18.89,
            category: 'Pássaro',
            sabor: 'Salmão',
            tipo: 'Ração',
            especificacao: {
              linha: 'Super premium',
              porte_raca: 'Pequeno',
              peso: '300 g',
              idade: 'Adulto',
            },
            description:
              'Alimento completo para aves ornamentais, indicado para calopsitas e outros psitacídeos de pequeno e médio porte no período de manutenção e muda.',
          },
        ],
      },
      {
        productListTitle: 'Medicamentos',
        productList: [
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1575296646776.jpg',
            name: 'Antipulgas e carrapatos bravecto msd para cães de 4,5 a 10 kg',
            price: 143.49,
            category: 'Cachorro',
            sabor: 'Antipulgas',
            tipo: 'Remédio',
            especificacao: {
              linha: 'Bravecto',
              porte_raca: 'Pequeno',
              peso: '250 mg',
              idade: 'Adulto',
            },
            description:
              'Prevenção e tratamento de pulgas e carrapatos em cães com mais de 8 semanas de vida.',
          },
        ],
      },
      {
        productListTitle: 'Moradia',
        productList: [
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1636115563457.jpg',
            name: 'Casa chalesco plástica para cães tamanho m - cores sortidas',
            price: 699.99,
            category: 'cachorro',
            sabor: 'N/a',
            tipo: 'Casa',
            especificacao: {
              linha: 'Premium',
              porte_raca: 'Grande',
              peso: '1 kg',
              idade: 'Filhote e adulto',
            },
            description:
              'Para montagem não é necessário o uso de ferramentas. não vêm com colchão, colchonete ou almofadas',
          },
        ],
      },
      {
        productListTitle: 'Brinquedos',
        productList: [
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1608212202034.jpg',
            name: 'Poste arranhador petz para gatos - cores sortidas',
            price: 71.99,
            category: 'Gato',
            sabor: 'N/a',
            tipo: 'Brinquedo',
            especificacao: {
              linha: 'Cores sortidas',
              porte_raca: 'Médio',
              peso: '250 mg',
              idade: 'Filhote e adulto',
            },
            description:
              'É natural que o seu pet fique entusiasmado diante de um brinquedo novo e que vá com muita sede ao pote para usá-lo.',
          },
        ],
      },
      {
        productListTitle: 'Limpeza e Saúde',
        productList: [
          {
            storeId: 0,
            image: 'https://staticpetz.stoom.com.br/fotos/1621366553662.jpg',
            name: 'Shampoo banho de carinho petz para cães 500ml',
            price: 9.99,
            category: 'Cachorro',
            sabor: 'N/a',
            tipo: 'Limpeza e saúde',
            especificacao: {
              linha: 'Cores sortidas',
              porte_raca: 'Médio',
              peso: '250 mg',
              idade: 'Filhote e adulto',
            },
            description:
              'É natural que o seu pet fique entusiasmado diante de um brinquedo novo e que vá com muita sede ao pote para usá-lo.',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 'Funny Goat Pet Shop',
    avatar: FunnyGoatShop,
    heightAvatar: 58,
    widthAvatar: 71,
    address: 'Avenida doutor olivio lira, 353',
    category: 'Produtos variados',
    distance: '7 km',
    deliveryPrice: 'Entrega Grátis',
    products: [
      {
        productListTitle: 'Rações',
        productList: [
          {
            storeId: 1,
            image: 'https://staticpetz.stoom.com.br/fotos/1569876517099.jpg',
            name: 'Ração golden fórmula senior para cães adultos sabor frango e arroz',
            price: 159.99,
            category: 'Cachorro',
            sabor: 'Frango',
            tipo: 'Ração',
            especificacao: {
              linha: 'Premium',
              porte_raca: 'Grande',
              peso: '15 kg',
              idade: 'Adulto',
            },
            description:
              'Quando idosos, os cães necessitam de uma dieta completa e balanceada. para ajudar os tutores nessa missão, a premier pet criou a ração golden senior.',
          },
        ],
      },
      {
        productListTitle: 'Limpeza e Saúde',
        productList: [
          {
            storeId: 1,
            image: 'https://staticpetz.stoom.com.br/fotos/1633380604102.jpg',
            name: 'Areia higiênica petz grãos médios para gatos',
            price: 9.99,
            category: 'Gato',
            sabor: 'N/a',
            tipo: 'Limpeza e saúde',
            especificacao: {
              linha: 'Premium',
              porte_raca: 'Médio',
              peso: '4 kg',
              idade: 'Adulto',
            },
            description:
              'Aplicar camada mínima de 4cm na caixa sanitária, repor apenas a quantidade descartada na limpeza diária, recomendado trocar completamente o granulado após quatro semanas.',
          },
        ],
      },
      {
        productListTitle: 'Moradia',
        productList: [
          {
            storeId: 1,
            image: 'https://staticpetz.stoom.com.br/fotos/1624634920752.jpg',
            name: 'Gaiola bragança criadeira branca com bandeja para calopsitas',
            price: 549.99,
            category: 'Pássaro',
            sabor: 'N/a',
            tipo: 'Casa',
            especificacao: {
              linha: 'Premium',
              porte_raca: 'Médio e grande',
              peso: '290 g',
              idade: 'Filhote e adulto',
            },
            description:
              'Aço, suporte para ninhos, poleiro de madeira, comedouros pequenos, bandeja de plástico.',
          },
        ],
      },
    ],
  },
];

export default StoreProductsList;
