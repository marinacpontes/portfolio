// Fonte única de conteúdo do portfólio.
// Edite aqui e rode `node build.mjs` para regenerar index.html e projetos/*.html.

export const profile = {
  name: 'Marina Carneiro Pontes',
  short: 'Marina Pontes',
  github: 'https://github.com/marinacpontes',
  // Canais exibidos na seção de contato e no rodapé
  contacts: [
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      value: '(85) 98668-0707',
      // Mensagem que já aparece digitada quando a conversa abre
      href:
        'https://wa.me/5585986680707?text=' +
        encodeURIComponent('Olá, Marina! Vi seu portfólio e gostaria de conversar sobre um projeto.'),
    },
    { key: 'mail', label: 'E-mail', value: 'marinadesenvolvedora@outlook.com', href: 'mailto:marinadesenvolvedora@outlook.com' },
    { key: 'instagram', label: 'Instagram', value: '@marina.devs', href: 'https://www.instagram.com/marina.devs/' },
    { key: 'tiktok', label: 'TikTok', value: '@marina.devs', href: 'https://www.tiktok.com/@marina.devs' },
  ],
};

// Tipos de projeto — usados nos selos para diferenciar claramente a natureza de cada trabalho.
export const types = {
  funcional: {
    label: 'Sistema funcional',
    tone: 'green',
    desc: 'Aplicação completa, com banco de dados e regras de negócio, que roda de ponta a ponta.',
  },
  emdev: {
    label: 'App em desenvolvimento',
    tone: 'amber',
    desc: 'App e API com partes já integradas e outras ainda com dados de exemplo.',
  },
  prototipo: {
    label: 'Protótipo interativo',
    tone: 'blue',
    desc: 'Interface navegável de ponta a ponta, com dados simulados e sem backend.',
  },
  conceito: {
    label: 'Conceito de interface',
    tone: 'violet',
    desc: 'Redesenho autoral e não oficial de uma marca existente, com dados fictícios.',
  },
  laboratorio: {
    label: 'Laboratório guiado',
    tone: 'slate',
    desc: 'Desenvolvido em um laboratório oficial, a partir de um código-base fornecido.',
  },
  academico: {
    label: 'Projeto acadêmico',
    tone: 'rose',
    desc: 'Trabalho avaliativo de uma disciplina.',
  },
};

export const projects = [
  {
    slug: 'banco-inter',
    img: 'inter',
    title: 'Banco Inter — Redesign',
    category: 'Landing page · Front-end',
    group: 'sites',
    type: 'conceito',
    status: { label: 'Executado localmente', live: false },
    repo: 'https://github.com/marinacpontes/bancointersite',
    demo: null,
    tint: '#F9E3CF',
    tintDeep: '#F2C9A5',
    year: '2026',
    summary:
      'Landing page que reimagina do zero o site de um banco digital: tipografia expressiva, gráficos em SVG próprio, cartões feitos só com CSS e microinterações em todas as seções.',
    cardFeatures: [
      'Painel de investimentos com gráfico interativo',
      'Carrossel de cartões 100% CSS com inclinação 3D',
      'Simulador de empréstimo e menu mobile próprio',
    ],
    tech: ['React 18', 'Vite 5', 'Tailwind CSS 3', 'JavaScript', 'Lucide', 'SVG'],
    goal: [
      'Exercício de direção visual e engenharia de front-end: imaginar como seria o site do Inter se fosse redesenhado hoje, com muito espaço em branco, o laranja como cor de destaque e animações que dão vida à página sem atrapalhar a leitura.',
      'O foco está no acabamento: cada seção tem uma interação própria, e todos os gráficos e cartões são desenhados em código, sem imagens ou bibliotecas de gráficos.',
    ],
    features: [
      { t: 'Hero interativo', d: 'Celular com o app desenhado em CSS e cartões flutuantes (Pix recebido, Cashback, Conta Global) que reagem ao movimento do mouse.' },
      { t: 'Produtos e simulador', d: 'Grade com seis produtos, cada um com ilustração própria e brilho que segue o cursor, e um simulador de empréstimo de R$ 1.000 a R$ 50.000.' },
      { t: 'Painel de investimentos', d: 'Gráfico de patrimônio com períodos 1M, 6M, 1A e 5A e leitura do valor sob o cursor, além de rosca de alocação e minigráficos dos ativos.' },
      { t: 'Carrossel de cartões', d: 'Cartões Gold, Platinum, Black e Win feitos só com gradientes CSS, com inclinação 3D e troca automática a cada 5 segundos.' },
      { t: 'Narrativa na rolagem', d: 'Ilustração que muda conforme o tópico chega ao centro da tela e um manifesto em que as palavras acendem uma a uma.' },
      { t: 'Responsivo e acessível', d: 'Menu de tela cheia no celular e respeito à preferência de movimento reduzido do sistema.' },
    ],
    highlights: [
      'Cinco hooks próprios de interação: useReveal (IntersectionObserver), useCountUp, useTilt, useSpotlight e useScrolled.',
      'Gráfico de patrimônio, rosca de alocação e minigráficos em SVG escrito à mão, sem biblioteca de gráficos.',
      'Textos e dados centralizados em um único arquivo de conteúdo, separados dos componentes.',
      'Tokens de design no Tailwind: paletas de marca e neutros, sombras e animações personalizadas.',
    ],
    transparency: [
      'Projeto conceitual, sem vínculo com o Banco Inter. Marcas e nomes pertencem aos seus donos, e o próprio site exibe esse aviso no topo da página.',
      'Saldos, cartões e rendimentos são fictícios. Os botões de abrir conta e entrar só exibem um aviso, sem coletar nenhum dado.',
      'Sem deploy público. As imagens foram capturadas com o projeto rodando localmente (npm run dev), sem nenhuma alteração.',
    ],
    cover: { layout: 'browser-phone', browser: 'hero', phone: 'm-hero' },
    gallery: {
      desktop: [
        ['hero', 'Hero: título, celular com o app e cartões flutuantes'],
        ['produtos', 'Produtos: conta digital e cartões de crédito'],
        ['investimentos', 'Investimentos: gráfico de patrimônio, alocação e ativos'],
        ['cartoes', 'Cartões: carrossel com inclinação 3D'],
        ['diferenciais', 'Diferenciais: ilustração que acompanha a rolagem'],
        ['sobre', 'Sobre: manifesto com palavras que acendem na rolagem'],
        ['abrir-conta', 'Chamada final para abrir a conta'],
      ],
      mobile: [
        ['m-hero', 'Hero no celular'],
        ['m-produtos', 'Produtos no celular'],
        ['m-investimentos', 'Investimentos no celular'],
        ['m-cartoes', 'Cartões no celular'],
      ],
    },
  },

  {
    slug: 'gestao-loteamento',
    img: 'imobiliaria',
    title: 'Sistema de Gestão de Loteamento',
    category: 'Sistema web · Full stack',
    group: 'sistemas',
    type: 'funcional',
    status: { label: 'Executado localmente', live: false },
    repo: 'https://github.com/marinacpontes/sistemaimobiliaria',
    demo: null,
    tint: '#DCE3F3',
    tintDeep: '#B9C7E8',
    year: '2026',
    summary:
      'Sistema administrativo para a venda de terrenos: quadras, lotes, clientes e contratos com parcelamento automático, multa por atraso e painel financeiro.',
    cardFeatures: [
      'Mapa de lotes por quadra com status em cores',
      'Contratos com parcelas geradas automaticamente',
      'Multa por atraso e receita prevista × recebida',
    ],
    tech: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React 18', 'Vite', 'Tailwind CSS', 'JWT', 'Zod', 'Docker'],
    goal: [
      'Centralizar a operação de venda de um loteamento em um só lugar: saber quais lotes estão disponíveis, reservados ou vendidos, registrar a venda e acompanhar o pagamento de cada parcela até a quitação.',
      'As regras de negócio ficam na API, que garante a consistência dos dados com transações. Uma venda nunca deixa o lote em estado inconsistente, e um lote nunca recebe dois contratos.',
    ],
    features: [
      { t: 'Acesso restrito', d: 'Login com JWT, senhas com hash bcrypt e todas as rotas da API e do painel protegidas.' },
      { t: 'Quadras e lotes', d: 'Mapa visual de cada quadra com os lotes coloridos por status, listagem com filtros (disponível, reservado, vendido) e busca por número.' },
      { t: 'Reservas com prazo', d: 'Um lote pode ser reservado por 7 dias e volta a ficar disponível automaticamente quando a reserva vence.' },
      { t: 'Clientes', d: 'Cadastro com CPF, contato e endereço completo, validado na API, com histórico de contratos de cada cliente.' },
      { t: 'Contratos', d: 'Nova venda com entrada e número de parcelas (até 360). As parcelas são geradas em uma transação e o lote passa a vendido.' },
      { t: 'Financeiro', d: 'Baixa de parcela com multa de 2% mais 0,1% por dia de atraso. Parcelas vencidas viram “atrasado” e o contrato é quitado automaticamente.' },
      { t: 'Dashboard', d: 'Totais de lotes por status, quadras, clientes e contratos, com receita prevista e receita efetivamente recebida.' },
    ],
    highlights: [
      'API organizada por domínio: cada módulo tem rotas, controller, service e DTO.',
      'Validação de entrada com Zod e tratamento centralizado de erros.',
      'Valores monetários com precisão decimal no PostgreSQL, sem arredondamentos de ponto flutuante no banco.',
      'Transações do Prisma na criação e na exclusão de contratos e na baixa de parcelas.',
      'Banco em Docker Compose e migrações versionadas.',
    ],
    transparency: [
      'Para as capturas, rodei o sistema localmente (PostgreSQL em Docker, API e frontend) e cadastrei dados fictícios pela própria API: 4 quadras, 42 lotes, 10 clientes e 8 contratos. Nomes, CPFs e valores não são reais.',
      'Sem demonstração pública. A interface foi pensada para desktop: no celular o painel funciona, mas as tabelas exigem rolagem horizontal.',
    ],
    cover: { layout: 'browser-phone', browser: 'dashboard', phone: 'm-dashboard' },
    gallery: {
      desktop: [
        ['dashboard', 'Dashboard com indicadores operacionais e financeiros'],
        ['quadra', 'Mapa da quadra com lotes por status'],
        ['lotes', 'Listagem de lotes com filtros por status'],
        ['contrato', 'Contrato com parcelas pagas, atrasadas e pendentes (com multa)'],
        ['contratos', 'Vendas registradas'],
        ['clientes', 'Cadastro de clientes'],
        ['nova-venda', 'Nova venda com geração automática de parcelas'],
        ['login', 'Tela de acesso'],
      ],
      mobile: [],
    },
  },

  {
    slug: 'perto-de-mim',
    img: 'pertodemim',
    title: 'Perto de Mim',
    category: 'App Android · Marketplace',
    group: 'mobile',
    type: 'emdev',
    status: { label: 'Sem demo: API fora do ar', live: false },
    repo: 'https://github.com/marinacpontes/pertodemim',
    demo: null,
    tint: '#D7E6E1',
    tintDeep: '#AFCDC3',
    year: '2026',
    summary:
      'Aplicativo Android nativo que conecta clientes a prestadores de serviço locais, com API REST própria em Node.js e PostgreSQL.',
    cardFeatures: [
      'App nativo em Java com Material Design 3',
      'Vitrine com filtros por categoria, preço, distância e nota',
      'API com pedidos, chat, avaliações e recuperação de senha',
    ],
    tech: ['Java', 'Android SDK', 'Material Design 3', 'Google Maps SDK', 'Retrofit', 'Node.js', 'Express 5', 'PostgreSQL', 'JWT', 'Railway'],
    goal: [
      'Um marketplace mobile para quem precisa de um serviço por perto: o cliente encontra prestadores, compara avaliações e agenda; o prestador ganha uma vitrine própria para divulgar o negócio e gerenciar pedidos.',
      'O projeto tem duas partes: o app Android, com cerca de 30 telas, e uma API REST em Node.js com PostgreSQL, que chegou a ser hospedada no Railway.',
    ],
    features: [
      { t: 'Contas para dois públicos', d: 'Cadastro e login de clientes e de fornecedores, já integrados à API, com sessão e token salvos no aparelho.' },
      { t: 'Vitrine de serviços', d: 'Busca e filtros combináveis por categoria, faixa de preço, distância e avaliação.' },
      { t: 'Perfil do fornecedor', d: 'Descrição, horário de funcionamento, contatos, nota média e lista de serviços oferecidos.' },
      { t: 'Agendamento', d: 'Resumo do serviço, escolha de data e horário e da forma de pagamento.' },
      { t: 'Área do cliente', d: 'Perfil com estatísticas, endereços salvos e histórico de serviços, além de telas de chat, notificações, ajuda e privacidade.' },
      { t: 'API REST', d: 'Pedidos com fluxo de aceitar, recusar e concluir; mensagens com imagens; avaliações; favoritos; portfólio com upload e recuperação de senha por e-mail.' },
    ],
    highlights: [
      'API em Express 5 com controllers por recurso, autenticação JWT (7 dias) e senhas com bcrypt.',
      'Regras de permissão por tipo de usuário: só o cliente dono do pedido pode pagá-lo, e o cancelamento só é aceito até 2 horas após o aceite.',
      'Upload de imagens com multer e envio de e-mails transacionais com Resend.',
      'Cliente HTTP com Retrofit e Gson no app, e Gradle com Version Catalogs.',
    ],
    transparency: [
      'Em desenvolvimento: no app, login e cadastro já estão conectados à API, mas a vitrine, o perfil, o agendamento e o chat ainda exibem dados de exemplo. A API já implementa esses recursos, só que eles ainda não estão ligados às telas. O mapa usa o Google Maps SDK, mas ainda não marca os prestadores.',
      'A forma de pagamento é apenas registrada no pedido. Não há processamento de pagamento real.',
      'A API hospedada no Railway está fora do ar, e o script do repositório cria só a tabela de usuários, então não foi possível reproduzir o sistema completo. As imagens são as capturas do emulador Android que estão no repositório; recortei apenas a moldura do emulador.',
    ],
    cover: { layout: 'phones', phones: ['vitrine', 'fornecedor', 'agendamento'] },
    gallery: {
      desktop: [],
      mobile: [
        ['autenticacao', 'Login com acesso para clientes e fornecedores'],
        ['mapa', 'Mapa com Google Maps SDK'],
        ['vitrine', 'Vitrine de serviços com filtros'],
        ['fornecedor', 'Perfil do fornecedor'],
        ['agendamento', 'Agendamento de serviço'],
        ['perfil-cliente', 'Perfil do cliente'],
      ],
    },
  },

  {
    slug: 'uber-clone',
    img: 'uberclone',
    title: 'Uber Clone',
    category: 'Web app · Mobile-first',
    group: 'mobile',
    type: 'prototipo',
    status: { label: 'Executado localmente', live: false },
    repo: 'https://github.com/marinacpontes/uberclone',
    demo: null,
    tint: '#E4E4E0',
    tintDeep: '#CACAC4',
    year: '2026',
    summary:
      'Réplica navegável do app de passageiro, do “Para onde?” à avaliação, com mapa, endereços e rotas reais de São Paulo.',
    cardFeatures: [
      'Busca de endereços e rotas reais (OpenStreetMap + OSRM)',
      '6 categorias com preço calculado pela rota',
      'Acompanhamento ao vivo, chat, PIN e avaliação',
    ],
    tech: ['React 18', 'Vite 5', 'JavaScript', 'Leaflet', 'OpenStreetMap', 'OSRM', 'Nominatim', 'CSS'],
    goal: [
      'Reproduzir com fidelidade a experiência completa de uma corrida em um app de mobilidade, como estudo de interface e de fluxo de produto: estados, transições e microcopy de cada etapa.',
      'O protótipo vai além de telas estáticas. Os endereços são buscados de verdade, a rota segue as ruas reais e o preço de cada categoria é calculado a partir da distância e da duração.',
    ],
    features: [
      { t: 'Tela inicial', d: 'Mapa com a localização e carros próximos, “Para onde?”, atalhos para Casa e Trabalho, recentes e sugestões em um painel arrastável.' },
      { t: 'Planejar a viagem', d: 'Busca de endereços reais com debounce e cache, botão para inverter partida e destino e opção de definir o local arrastando o mapa.' },
      { t: 'Escolha da viagem', d: 'Rota real e seis categorias, com preço calculado por tarifa base, km, minuto e multiplicador, além do horário de chegada de cada uma.' },
      { t: 'Agendar e pagar', d: 'Reserva de horário de retirada e pagamento via Pix, cartão ou dinheiro.' },
      { t: 'Durante a corrida', d: 'Busca de motorista animada, carro andando sobre a rota, tempo estimado, PIN, placa, chat e ligação simulados e central de segurança.' },
      { t: 'Depois da corrida', d: 'Avaliação com estrelas, elogios ou problemas e gorjeta, além das abas de Atividade (com “Repetir”) e Conta.' },
    ],
    highlights: [
      'Estado global com Context (navegação por pilha e simulação da viagem) e um mapa persistente compartilhado entre as telas.',
      'Fallbacks de rede: mapa base alternativo e trajeto aproximado quando o serviço de rotas não responde.',
      'Ícones e ilustrações dos veículos em SVG feitos à mão, com tokens de cor, tipografia e sombra.',
      'Moldura de celular a partir de 600 px e painel de atalhos para cada fluxo acima de 1100 px.',
    ],
    transparency: [
      'Protótipo de interface sem backend e sem vínculo com a Uber. Motoristas, pagamentos e histórico são simulados; já o mapa, os endereços e as rotas são reais.',
      'Sem deploy público. As imagens foram capturadas com o projeto rodando localmente, percorrendo o fluxo completo de uma corrida até o Aeroporto de Congonhas.',
    ],
    cover: { layout: 'phones', phones: ['opcoes', 'home', 'viagem'] },
    gallery: {
      desktop: [['desktop', 'No desktop: moldura de celular e painel de atalhos para cada fluxo']],
      mobile: [
        ['home', 'Tela inicial com mapa e carros próximos'],
        ['busca', 'Planeje sua viagem'],
        ['opcoes', 'Escolha da categoria com rota real'],
        ['opcoes-comfort', 'Categoria Comfort selecionada'],
        ['procurando', 'Procurando motorista'],
        ['viagem', 'Motorista a caminho com PIN e placa'],
        ['avaliacao', 'Avaliação e gorjeta'],
      ],
    },
  },

  {
    slug: 'ai-course-creator',
    img: 'buildwithai',
    title: 'AI Course Creator',
    category: 'IA · Sistema multiagente',
    group: 'ia',
    type: 'laboratorio',
    status: { label: 'Requer Google Cloud', live: false },
    repo: 'https://github.com/marinacpontes/buildwithai',
    demo: null,
    tint: '#E1E4FA',
    tintDeep: '#C2C8F2',
    year: '2026',
    summary:
      'Um time de agentes de IA que pesquisa, checa os fatos e escreve um curso estruturado sobre qualquer tema. Desenvolvido no laboratório Build with AI do Google Cloud.',
    cardFeatures: [
      'Quatro agentes que conversam pelo protocolo A2A',
      'Ciclo de pesquisa e checagem com até 3 rodadas',
      'Progresso em tempo real e curso com índice',
    ],
    tech: ['Python', 'Google ADK', 'Gemini', 'Vertex AI', 'A2A', 'FastAPI', 'Pydantic', 'Docker', 'Cloud Run'],
    goal: [
      'Transformar um pedido simples, como “crie um curso sobre a Revolução Francesa”, em um curso completo, com módulos e tópicos, a partir de uma pesquisa revisada antes de ser escrita.',
      'O projeto mostra uma arquitetura de agentes pronta para produção: cada agente roda como um microsserviço independente, eles se comunicam por um protocolo padrão e tudo é publicado no Cloud Run.',
    ],
    features: [
      { t: 'Pesquisador', d: 'Agente que pesquisa o tema usando a ferramenta de busca do Google.' },
      { t: 'Juiz', d: 'Avalia a pesquisa e devolve “pass” ou “fail” com feedback em saída estruturada (Pydantic). Se reprovar, o pesquisador tenta de novo, até 3 vezes.' },
      { t: 'Redator', d: 'Transforma a pesquisa aprovada em um curso com título, módulos e tópicos, no idioma do pedido.' },
      { t: 'Orquestrador', d: 'Coordena o fluxo com LoopAgent (pesquisa ↔ juiz) e SequentialAgent (pesquisa → escrita).' },
      { t: 'Interface web', d: 'Site em FastAPI com o progresso de cada etapa transmitido em tempo real e o curso exibido com índice lateral navegável.' },
    ],
    highlights: [
      'Cada agente é um microsserviço com Dockerfile próprio, e eles conversam pelo protocolo A2A (Agent-to-Agent).',
      'Saída estruturada e validada no agente juiz, o que permite decidir o fluxo em código, sem interpretar texto livre.',
      'Scripts para subir tudo localmente e publicar os serviços no Cloud Run.',
    ],
    example: {
      prompt: 'Crie um curso sobre a Revolução Francesa',
      title: 'Curso Abrangente sobre a Revolução Francesa: Uma Jornada da Queda do Antigo Regime à Ascensão de Napoleão',
      modules: [
        'Módulo 1: A França no Limiar da Revolução - O Antigo Regime em Crise',
        'Módulo 2: A Explosão Revolucionária e a Queda da Monarquia (1789-1792)',
        'Módulo 3: A República e o Reinado do Terror (1792-1794)',
        'Módulo 4: Do Termidor a Napoleão - O Fim da Revolução (1794-1799)',
        'Módulo 5: O Legado da Revolução Francesa',
      ],
    },
    transparency: [
      'Desenvolvido no laboratório oficial “Building a Multi-Agent System” (Build with AI / Production-Ready AI Roadshow) do Google Cloud. O site, os scripts e os servidores vêm do código inicial do laboratório (licença Apache 2.0); os quatro agentes foram implementados durante o laboratório, seguindo as etapas guiadas.',
      'Para rodar, é preciso um projeto Google Cloud com Vertex AI e faturamento ativo. Por isso, a tela inicial foi capturada localmente, e as telas de geração e do curso pronto são as registradas no repositório durante o laboratório.',
    ],
    cover: { layout: 'browser-phone', browser: 'curso', phone: 'm-inicio' },
    gallery: {
      desktop: [
        ['inicio', 'Tela inicial: o usuário digita o tema'],
        ['gerando', 'Agentes trabalhando: pesquisa, checagem e escrita'],
        ['curso', 'Curso gerado com índice lateral'],
      ],
      mobile: [],
    },
  },

  {
    slug: 'lanchonete',
    img: 'lanchonete',
    title: 'Lanchonete da Marina',
    category: 'Web app · CRUD',
    group: 'sistemas',
    type: 'academico',
    status: { label: 'Demo online', live: true },
    repo: 'https://github.com/marinacpontes/lanchonetesistema',
    demo: 'https://lanchonetesistema.vercel.app/',
    tint: '#FBE0D2',
    tintDeep: '#F4BFA4',
    year: '2026',
    summary:
      'Sistema de pedidos para lanchonete com CRUD completo, edição de ingredientes por unidade e persistência no navegador, feito em JavaScript puro.',
    cardFeatures: [
      'Criar, listar, editar e remover itens do pedido',
      'Ingredientes editáveis em cada unidade',
      'Pedido salvo no navegador com LocalStorage',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'Vercel'],
    goal: [
      'Trabalho da 2ª avaliação da disciplina Código de Alta Performance Web: um fluxo de pedido completo, do nome do cliente à confirmação, com as quatro operações de um CRUD e sem frameworks.',
      'O cliente monta o pedido pelo cardápio, ajusta cada lanche do seu jeito e finaliza com um resumo detalhado.',
    ],
    features: [
      { t: 'Cardápio', d: 'Hambúrgueres, cachorro-quente, porções e bebidas, com controle de quantidade (+/−) direto em cada card.' },
      { t: 'Seu pedido', d: 'Tabela com quantidade e subtotal por item, total geral e botão de finalizar.' },
      { t: 'Ingredientes por unidade', d: 'Cada unidade de um lanche pode ser editada separadamente. Ingredientes base, como pão e batata, não aparecem como opção de remoção.' },
      { t: 'Remoção com confirmação', d: 'Excluir um item pede confirmação antes de alterar o pedido.' },
      { t: 'Persistência', d: 'Nome do cliente, itens e observações ficam salvos no navegador e sobrevivem a recarregar a página.' },
      { t: 'Responsivo', d: 'Layout que se adapta ao celular.' },
    ],
    highlights: [
      'HTML semântico e JavaScript sem dependências, separados em estrutura, estilo e lógica.',
      'Delegação de eventos para os botões do cardápio e da tabela, que são renderizados dinamicamente.',
      'Publicado na Vercel.',
    ],
    transparency: [
      'Projeto acadêmico. A demonstração está publicada na Vercel e funciona no navegador, sem backend.',
      'As capturas foram feitas localmente com um pedido de exemplo. A imagem do pedido confirmado vem do repositório (é um aviso nativo do navegador).',
    ],
    cover: { layout: 'browser-phone', browser: 'cardapio', phone: 'm-editar' },
    gallery: {
      desktop: [
        ['cardapio', 'Cardápio com quantidades selecionadas'],
        ['pedido', 'Resumo do pedido com subtotais e total'],
        ['editar', 'Edição de ingredientes por unidade'],
        ['confirmado', 'Pedido confirmado'],
      ],
      mobile: [
        ['m-inicio', 'Tela inicial no celular'],
        ['m-cardapio', 'Cardápio no celular'],
        ['m-editar', 'Edição de ingredientes no celular'],
      ],
    },
  },
];

export const groups = {
  sites: 'Sites e landing pages',
  sistemas: 'Sistemas web',
  mobile: 'Mobile',
  ia: 'Inteligência artificial',
};
