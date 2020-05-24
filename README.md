1. Install package

  ```shell
  cd server
  npm i
  ```

2. Config DB in `.env` file

3. Run migrate and seed database

  ```shell
  sequelize db:migrate
  sequelize db:seed:all
  ```

4. Run server

  ```shell
  node index.js
  ```
