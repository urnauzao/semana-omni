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