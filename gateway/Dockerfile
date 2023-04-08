FROM node:16

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .


RUN npm install



EXPOSE 8080
CMD [ "node", "server.js" ]