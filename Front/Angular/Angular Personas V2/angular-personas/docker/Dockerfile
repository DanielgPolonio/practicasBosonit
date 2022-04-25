FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install -g npm@latest

RUN npm i --legacy-peer-deps

RUN npm run build:prod

FROM nginx:latest

COPY --from=build /usr/local/app/dist/crmjaenangular /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d