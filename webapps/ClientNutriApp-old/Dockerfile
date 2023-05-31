FROM maven:3.9-amazoncorretto-19
EXPOSE 8080
WORKDIR /ClientNutriApp
COPY . .
RUN mvn clean install

CMD mvn spring-boot:run