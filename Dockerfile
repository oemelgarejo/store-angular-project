FROM node:latest as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN npm run build --prod

#Second step

FROM nginx:latest

COPY --from=build-step /app/dist/myng-store /usr/share/nginx/html
