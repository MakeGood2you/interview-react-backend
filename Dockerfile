FROM node:16

#WORKDIR /usr/src/

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json /usr/src/node-app

USER node

RUN npm install

#COPY . .
COPY --chown=node:node . /usr/src/node-app

EXPOSE 9090

CMD [ "node", "./src/server.js" ]

# docker run --name node-web-app -p 9090:9090 -d kobi/node-web-app