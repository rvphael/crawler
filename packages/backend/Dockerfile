FROM node:16.16.0

# Definindo o diretório de trabalho para a instalação das dependências do backend
WORKDIR /app/packages/backend

RUN apt-get update && \
  apt-get install -y default-mysql-client && \
  rm -rf /var/lib/apt/lists/*

# Instalando dependências
COPY packages/backend/package.json .
RUN yarn install

# Copiando o restante dos arquivos
COPY . /app

# Tornando o script de entrada executável
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expondo a porta 3000
EXPOSE 3000

# Definindo o ponto de entrada e o comando
ENTRYPOINT ["entrypoint.sh"]
CMD ["yarn", "dev"]
