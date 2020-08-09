# Página Oficial
https://nextlevelweek.com/episodios/omnistack/1/edicao/2

# Extensão do Google Chrome para reconhecer páginas/sistemas em React
React Developer Tools
[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=pt-BR]

# criando projeto web
com yarn:
yarn create react-app web --template typescript

com npm:
npx create-react-app web --template typescript

# iniciar o servidor do projeto
yarn start

# configurar rotas no react
yarn add react-router-dom

# depencias para as rotas, apenas para ambiente de desenvolvimento
yarn add @types/react-router-dom -D

###### AULA 02
# novo projeto
yarn init -y

# configurar typescript
yarn add typescript -D

# criar configurações do typescript
yarn tsc --init

# dependecia. Executa o servidor e fica ouvindo e atualizando
yarn add ts-node-dev -D

# instalar o express
yarn add express

# em caso de erro ao importar o express
yarn add @types/express -D

# instalar o banco de dados
yarn add knex sqlite3

# em package.json adicionar 'scripts'
"scripts": {
    "start": "tsnd  --transpile-only --ignore-watch node_modules --respawn src/server.ts",
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"
  }

# chamar a migrate
yarn knex:migrate

# instalar o cors
yarn add cors
yarn add @types/cors

# instalar biblioteca para consumir api
yarn add axios

# criando projeto mobile
expo init mobile
-- template: blank(TypeScript)

# startar o projeto
yarn start

# instalar fonts google via expo
expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# biblioteca para gerenciar rotas e navegação. React Navigation
yarn add @react-navigation/native
-- https://reactnavigation.org

# bibliotecas complementares do React Navigation
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# biblioteca de modo de navegação Stack
yarn add @react-navigation/stack

# biblioteca de modo de navegação em tab
yarn add @react-navigation/bottom-tabs

# Armazenamento local 
expo install @react-native-community/async-storage

# atividades v2
[https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc623597]

