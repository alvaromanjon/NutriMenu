FROM eclipse-temurin:17
RUN apt update && apt -y upgrade
RUN apt install -y inotify-tools dos2unix
ENV HOME=/app
RUN mkdir -p $HOME
WORKDIR $HOME