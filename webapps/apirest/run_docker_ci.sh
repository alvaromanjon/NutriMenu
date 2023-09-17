#!/bin/bash
dos2unix mvnw
./mvnw clean package
./mvnw spring-boot:run
