# Pokémon Pokedex

A **Pokémon Pokedex** é uma aplicação React que permite consultar informações detalhadas sobre os Pokémon, incluindo tipos e características, utilizando a [Pokémon API](https://pokeapi.co/).

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface.
- **Vite**: Ferramenta de build rápida e moderna.
- **Styled Components**: Biblioteca para estilização de componentes em React.
- **Vitest**: Framework de testes para testes unitários e de integração.

## ⚙ Funcionalidades

- **Seleção de Tipos de Pokémon**: O usuário pode filtrar Pokémon por tipo.
- **Exibição de Detalhes**: Ao clicar em um Pokémon, detalhes como nome, habilidades, altura, peso e uma imagem são exibidos.
- **Modo Escuro/Claro**: O usuário pode alternar entre os modos de tema claro e escuro.
- **Carregamento Dinâmico**: Os dados dos Pokémon são carregados dinamicamente através de requisições à API.

## 👀 Preview

![Preview](url-do-seu-gif.gif)

## 🖥 Como Rodar a Aplicação Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/pokedex-react.git
Acesse a pasta do projeto:

bash
Copy code
cd pokedex-react
Instale as dependências:

bash
Copy code
npm install
Inicie o servidor de desenvolvimento:

bash
Copy code
npm run dev
Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

📄 Estrutura do Projeto
A estrutura de pastas do projeto é a seguinte:

bash
Copy code
/pokedex
  /public
    index.html        # Arquivo HTML principal
  /src
    /components       # Componentes React
    /hooks            # Hooks personalizados
    /assets           # Imagens e outros arquivos estáticos
    App.jsx           # Componente principal
    main.jsx          # Ponto de entrada da aplicação
  /tests              # Testes (caso você implemente mais tarde)
  package.json        # Dependências e scripts do projeto
  vite.config.js      # C