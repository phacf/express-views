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