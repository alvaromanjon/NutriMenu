# NutriMenu

Web app that informs you of the nutritional content of food items on menus.

# Development environment

## Setting up environment variables

In order to run the app, you need to set some environment variables first. You must create an `.env` file on `docker-compose` directory to set up all the necessary variables (replacing the angle brackets strings with your own values, WITHOUT keeping the angle brackets):

```shell
# API REST variables
API_WEB_DOCKER_PORT=8080
API_WEB_LOCAL_PORT=8080
API_RELOAD_DOCKER_PORT=35729
API_RELOAD_LOCAL_PORT=35729
API_DEBUG_DOCKER_PORT=5005
API_DEBUG_LOCAL_PORT=5005

# Frontend variables
CHOKIDAR_USEPOLLING=true
VITE_NUTRI_X_APP_ID=<YOUR_APP_ID>
VITE_NUTRI_X_APP_KEY=<YOUR_APP_KEY>
VITE_NUTRI_X_REMOTE_USER_ID=0

#DB variables
DATABASE_HOST=mysqldb
MYSQL_DATABASE=nutri_db
MYSQL_USER=dbadmin
MYSQL_PASSWORD=<YOUR_PASSWORD>
MYSQL_ROOT_PASSWORD=<YOUR_ROOT_PASSWORD>
DB_DOCKER_PORT=3306
DB_LOCAL_PORT=3306
```

For more information about this variables, you can see the `.env.example` file on `docker-compose` directory.

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
