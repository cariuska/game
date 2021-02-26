FROM node:14-slim

WORKDIR /app

ADD . /app

RUN npm install --silent

CMD node server.js
