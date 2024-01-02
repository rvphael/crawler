FROM node:16.16.0

WORKDIR /app/packages/backend

RUN apt-get update && \
  apt-get install -y default-mysql-client && \
  rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./
COPY packages/backend/package.json ./packages/backend/

RUN yarn install

COPY . /app
COPY entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 4000

ENTRYPOINT ["entrypoint.sh"]

CMD ["yarn", "dev"]
