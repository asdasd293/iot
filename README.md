1. Install package

  ```shell
  cd server
  npm i
  ```

2. Download and install xampp -> Open xampp -> start Apache, MySQL

3. Open http://localhost/phpmyadmin/ -> New DB -> DB name: iot, select: utf8_unicode_ci -> Create

3. Config DB in `.env` file (View file .env.example)

4. Run migrate and seed database

  ```shell
  sequelize db:migrate
  sequelize db:seed:all
  ```

5. Run server

  ```shell
  node index.js
  ```
