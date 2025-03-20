FROM node:22.9.0-alpine

WORKDIR /usr/app

COPY . .

ARG VERSION

RUN npm install

RUN npx nuxi cleanup

RUN npx nuxi build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]