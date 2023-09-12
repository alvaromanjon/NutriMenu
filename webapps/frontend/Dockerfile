FROM node:alpine
ENV HOME=/app
RUN mkdir -p $HOME
WORKDIR $HOME
COPY package*.json ./
RUN npm install
EXPOSE ${FRONTEND_LOCAL_PORT}
CMD ["npm", "start"]