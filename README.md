# NutriMenu
Web app that informs you of the nutritional content of food items on menus.

## Setting up environment variables
In order to run the app, you need to set some environment variables first. You must create an `.env` file on `docker-compose` directory to set up all the necessary variables:

```shell
# API REST variables
API_WEB_DOCKER_PORT=8080
API_WEB_LOCAL_PORT=8080
API_RELOAD_DOCKER_PORT=35729
API_RELOAD_LOCAL_PORT=35729
API_DEBUG_DOCKER_PORT=5005
API_DEBUG_LOCAL_PORT=5005

# Frontend variables
FRONTEND_DOCKER_PORT=3000
CHOKIDAR_USEPOLLING=true

# DB variables
DATABASE_HOST=mysqldb
MYSQL_DATABASE=nutri_db
MYSQL_USER=dbadmin
MYSQL_PASSWORD=<MySQL password> # Choose a password for dbadmin user
MYSQL_ROOT_PASSWORD=<MySQL root password> # Choose a password for MySQL root user
DB_DOCKER_PORT=3306
DB_LOCAL_PORT=3306
```
## Building and deploying the app
To build and run the app, open a new console, access to the `docker-compose` directory, and run the following command:

```bash
docker compose -f docker-compose.dev.yml build
```

After the building process is completed you can run the app using the following command:

```bash
docker compose -f docker-compose.dev.yml up -d
```

To stop the app, you can use this command:

```bash
docker compose -f docker-compose.dev.yml stop
```

Or this to completely delete all the containers related to the app:

```bash
docker compose -f docker-compose.dev.yml down
```

For further documentation, please refer to the .pdf files in folder `/docs`.
