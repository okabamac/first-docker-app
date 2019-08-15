FROM node:10.15.0-alpine
EXPOSE 3000 9229

USER node


WORKDIR /home/node

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin


COPY package.json /home/node/
COPY package-lock.json /home/node/

RUN npm ci

COPY . /home/node

RUN npm run build

CMD ["npm", "start"]
