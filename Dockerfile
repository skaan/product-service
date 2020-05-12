FROM node:alpine as client
WORKDIR /usr/src/app
COPY client/package*.json ./
RUN npm install --only=development
COPY client .
RUN npm run build

FROM node:alpine as server
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/src/main"]