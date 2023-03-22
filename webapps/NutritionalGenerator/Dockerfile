FROM openjdk:19-alpine
EXPOSE 8080
COPY target/ws-nutritGenerator-app.jar ws-nutritGenerator-app.jar
ENTRYPOINT ["java","-jar","/ws-nutritGenerator-app.jar"]