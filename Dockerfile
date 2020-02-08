from node:8.7.0-alpine

RUN mkdir -p /srv/app/portfolio
WORKDIR /srv/app/portfolio

COPY package.json /srv/app/portfolio
COPY package-lock.json /srv/app/portfolio

RUN npm install


CMD [ "npm", "start" ]

