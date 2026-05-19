FROM node:20-alpine AS pagina-iugna

WORKDIR /app

COPY package.json ./

# --legacy-peer-deps necesario por conflicto de @fortawesome/angular-fontawesome con Angular 20
RUN npm install --legacy-peer-deps

# Actualiza caniuse-lite para evitar el error "Invalid version: 18.5-18.7" de esbuild
RUN npx --yes update-browserslist-db@latest

COPY . .

RUN npm run build

# Segunda etapa: servidor nginx
FROM nginx:1.17.1-alpine AS prod-stage

COPY --from=pagina-iugna /app/dist/pagina-iugna-test /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
