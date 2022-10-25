FROM node:lts-alpine

RUN mkdir /app && chown -R node:node /app

WORKDIR /app

RUN mkdir -p node_modules && chown -R node:node node_modules

COPY --chown=node:node ./package.json .

USER node

RUN npm i

COPY --chown=node:node . .

EXPOSE ${SERVER_PORT}

CMD ["npm", "start"]

#docker run -d -e MONGO_INITDB_ROOT_USERNAME=pol -e MONGO_INITDB_ROOT_PASSWORD=12345678 -p 8000:27017 --name=Mongo -v MongoDb:/db mongo

#docker build -t express_view .

#docker run -d --name express_view -p 4000:5000 express_view