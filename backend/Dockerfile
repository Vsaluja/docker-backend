FROM node:20-slim

WORKDIR /app

COPY package-lock.json package-lock.json
COPY package.json package.json
COPY server.js server.js

RUN npm install

CMD ["npm", "start"]