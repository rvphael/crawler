FROM node:16.16.0

WORKDIR /app/packages/frontend

COPY package.json yarn.lock ./
COPY packages/frontend/package.json ./packages/frontend/

RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "start"]
