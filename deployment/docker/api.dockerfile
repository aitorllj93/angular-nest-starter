# Stage 1: Build an Angular Docker Image
FROM node
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
ARG configuration=production
RUN npm run build -- api --outputPath=./dist/apps/api/ --configuration $configuration
CMD node dist/apps/api/main.js
