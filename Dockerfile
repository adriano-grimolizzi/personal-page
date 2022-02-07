FROM node:17-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm i react-scripts@5.0.0 -g 

COPY . ./

RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
