# NutriMenu
Web app that informs you of the nutritional content of food items on menus.

In order to run the app, you need to set some environment variables first. My recommendation is to create an `.env` file, and place all the variables there, so you can later export them all at once. These are all the variables and their recommended values:

```shell
# Client variables
CLIENT_WEB_DOCKER_PORT=8081
CLIENT_WEB_LOCAL_PORT=8081
CLIENT_RELOAD_DOCKER_PORT=35730
CLIENT_RELOAD_LOCAL_PORT=35730
CLIENT_DEBUG_DOCKER_PORT=5006
CLIENT_DEBUG_LOCAL_PORT=5006

# Manage variables
MANAGE_WEB_DOCKER_PORT=8080
MANAGE_WEB_LOCAL_PORT=8080
MANAGE_RELOAD_DOCKER_PORT=35729
MANAGE_RELOAD_LOCAL_PORT=35729
MANAGE_DEBUG_DOCKER_PORT=5005
MANAGE_DEBUG_LOCAL_PORT=5005

#DB variables
DATABASE_HOST=mysqldb # Name of the DB host
MYSQL_DATABASE=nutri_db # Name of the main database
MYSQL_USER=<MySQL user>
MYSQL_PASSWORD=<MySQL password>
MYSQL_ROOT_PASSWORD=<MySQL root password>
DB_DOCKER_PORT=3306
DB_LOCAL_PORT=3306
```

If you plan to run the app locally, you can load them using the following command:

```shell
export `source .env`
```

If you plan to run the app using Docker Compose, you must create the file on the folder `docker-compose`, and Docker will automatically use the variables when you run the containers.
