FROM node:12-alpine AS builder-step
WORKDIR /usr/application
COPY ./package.json ./
COPY ./webpack.common.config.js ./
COPY ./webpack.dev.config.js ./
COPY ./webpack.prod.config.js ./
COPY ./babel.config.json ./
COPY ./src ./src
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder-step /usr/application/dist /usr/share/nginx/html

