# Site editorial — Daniella Almada

Site estático em HTML, CSS e JavaScript, pronto para GitHub Pages. A direção visual combina uma estrutura editorial inspirada em revistas digitais com identidade própria em preto, branco, cinza, amarelo e malbec.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub.
2. Envie **todos os arquivos e pastas** deste projeto para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, pasta `/root`, e clique em **Save**.
6. O GitHub exibirá o endereço público após alguns minutos.

## Arquivo mais importante para editar

Abra `assets/js/site-config.js` e confira:

- WhatsApp e telefone;
- e-mail;
- Instagram;
- link do Google Meu Negócio;
- link da Hotmart para o DNA dos Contratos;
- link do formulário/lista de espera do Clube dos Doze;
- eventual página externa de newsletter;
- número da OAB, caso queira utilizá-lo em uma atualização futura.

Os links da Hotmart e do Clube foram deixados vazios. Enquanto estiverem vazios, os respectivos botões ficam visualmente desativados.

## Trocar textos de artigos, livros e depoimentos

Edite `assets/js/content-data.js`. O arquivo concentra:

- artigos e textos completos;
- livros recomendados;
- depoimentos de alunos;
- histórias pessoais;
- viagens.

Os depoimentos atuais são **textos provisórios**. Substitua apenas por relatos autorizados de alunos do curso. Não use depoimentos de clientes de serviços jurídicos sem conferir as regras éticas aplicáveis à publicidade na advocacia.

## Trocar as imagens

As imagens atuais são ilustrações provisórias em SVG. Você pode:

1. substituir o arquivo mantendo exatamente o mesmo nome; ou
2. colocar uma imagem nova em `assets/images` e alterar o caminho correspondente no HTML ou em `content-data.js`.

Sugestões de fotos necessárias:

- foto principal de Daniella;
- retratos profissionais;
- fotos de viagens;
- fotografia escolhida para a página de memória;
- capas ou imagens autorizadas do Clube dos Doze e do DNA dos Contratos.

## Formulários

O formulário de contato monta uma mensagem e encaminha o usuário ao WhatsApp. Isso permite usar o site no GitHub Pages sem servidor.

A newsletter usa o link definido em `site-config.js`. Sem link configurado, abre um e-mail de solicitação de inscrição.

## Estrutura

- `index.html`: página inicial;
- `atendimento.html`: serviços jurídicos;
- `artigos.html` e `artigo.html`: arquivo e leitura de artigos;
- `historias.html`: ensaios e histórias;
- `livros.html`: indicações de livros;
- `clube-dos-doze.html`: clube de leitura;
- `dna-dos-contratos.html`: curso para advogados;
- `viagens.html`: galeria de viagens;
- `memoria.html`: homenagem ao pai;
- `contato.html`: canais e formulário;
- `404.html`: página de erro.

## Observações

O projeto não copia o código, a marca, os textos ou os ativos do Service95. A referência foi traduzida em uma composição original: navegação por categorias, tipografia editorial, mosaicos de conteúdo, áreas de assinatura e destaques de leitura.
