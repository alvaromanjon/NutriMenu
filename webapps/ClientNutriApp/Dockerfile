FROM --platform=linux/amd64 eclipse-temurin:19-alpine
EXPOSE 8081
COPY target/ws-nutriClient-app.jar ws-nutriClient-app.jar
ENTRYPOINT ["java","-jar","/ws-nutriClient-app.jar"]