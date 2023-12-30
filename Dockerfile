FROM node:16.16.0

WORKDIR /app

RUN apt-get update && \
  apt-get install -y default-mysql-client && \
  rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3000

WORKDIR /app/packages/backend

ENTRYPOINT ["entrypoint.sh"]
CMD ["yarn", "dev"]
