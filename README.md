1. Install package

  cd server
  npm i

2. Config DB in `.env` file

3. Run migrate and seed database

  sequelize db:migrate
  sequelize db:seed:all

4. Run server

  node index.js