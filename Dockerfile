FROM node:16-alpine AS pagina-iugna

#RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build --prod

#Segunda Etapa

FROM nginx:1.17.1-alpine AS prod-stage


COPY --from=pagina-iugna /app/dist/pagina-iugna-test /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
