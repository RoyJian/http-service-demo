# http-service-demo
## Start
1. Prepare .env file
    ```bash
    $ cp .env.example .env
    ```
2.  Sign local certificate
    ```bash
    $ mkdir cert && cd ./cert
    $ mkcert -install
    $ mkcert localhost.dev
    ```
3. Install backend dependency packages
    ```bash
    $ cd $PROJECT_ROOT/backend
    $ npm install
    ```
4. Start backend service
    ```bash
    $ npm start
    ```
5. Start nginx
    ```bash
    $ cd $PROJECT_ROOT
    $ docker compose up -d
    ```
6. Import database schema
    1. Go to http://127.0.0.1:8888
    2. Log in using **DB_USERNAME** and **DB_PASSWORD** in the .env file
    3. Click to import
    4. Select the **schema.sql** file to upload
7. Modify the hosts file   
    ```bash
    $ vim /etc/hosts
    ```
    Wirte `127.0.0.1 localhost.dev` to `/etc/hosts`
## Demo
1. Go to https://localhost.dev
![login.png](assets/login.png)
2. Enter user and password
    ```
    user: user
    password: 1234
    ```
3. Login success
![login_success.png](assets/login_success.png)
4. Login fail
![assets/login_fail.png](assets/login_fail.png)


