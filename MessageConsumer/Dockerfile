FROM node:lts
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 28080
CMD [ "node", "index.js" ]
