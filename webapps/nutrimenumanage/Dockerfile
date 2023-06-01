FROM maven:3.9-amazoncorretto-17 AS build

WORKDIR /nutrimenumanage
COPY . .

RUN mvn clean package
EXPOSE 8080
ENTRYPOINT ["java","-jar","target/nutrimenumanage-0.0.1-SNAPSHOT.jar"]
