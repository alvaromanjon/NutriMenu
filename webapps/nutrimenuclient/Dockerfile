FROM maven:3.9-amazoncorretto-17 AS build

WORKDIR /nutrimenuclient
COPY . .

RUN mvn clean package
EXPOSE 8081
ENTRYPOINT ["java","-jar","target/nutrimenuclient-0.0.1-SNAPSHOT.jar"]
