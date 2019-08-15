FROM node:10.15.0-alpine
EXPOSE 3000 9229

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node

COPY package.json /home/node/
COPY package-lock.json /home/node/

RUN npm ci

COPY . /home/node

RUN npm run build

# CMD ./scripts/start.sh
CMD ["npm", "start"]
