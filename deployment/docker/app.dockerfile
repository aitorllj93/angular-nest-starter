# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
ARG configuration=production
RUN npm run build -- --outputPath=./dist/apps/app/ --configuration $configuration
# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx
COPY --from=build /app/dist/apps/app/ /usr/share/nginx/html
COPY /deployment/nginx/default.conf /etc/nginx/conf.d/default.conf
