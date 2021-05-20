# FROM node:alpine

# WORKDIR /usr/app

# COPY . .
# RUN npm install -g npm@7.7.6
# RUN npm install -g @angular/cli@7.3.9
# RUN npm install

# EXPOSE 4200

# CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM node:14.11.0-alpine3.11 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN rm -rf .dockerignore
RUN npm run-script build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/index.html
COPY --from=build /app/dist/frontend ./
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80