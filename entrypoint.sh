#!/bin/sh

# Função para aguardar o MySQL ficar pronto
wait_for_db() {
    echo "Esperando pelo MySQL..."
    while ! mysqladmin ping -h"$DB_HOST" --silent; do
        sleep 1
    done
}

# Executando a função
wait_for_db

# Criando o banco de dados se ele não existir
echo "Criando o banco de dados, se necessário..."
mysql -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "CREATE DATABASE IF NOT EXISTS $DB_DATABASE;"

# Navegando para o diretório backend
cd /app/packages/backend

# Executando migrações
echo "Executando migrações..."
npx sequelize-cli db:migrate

echo "Iniciando o servidor de desenvolvimento..."
exec "$@"
