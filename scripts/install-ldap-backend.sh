#!/bin/bash

# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker y Docker Compose
sudo apt install -y ca-certificates curl gnupg lsb-release git

# Añadir repositorio Docker
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Clonar repositorio
git clone https://github.com/tu_usuario/proyecto-node.git
cd proyecto-node

# Configurar .env si es necesario (se puede copiar un .env por defecto)
cp .env.example .env

# Levantar contenedores LDAP y Backend
docker compose up -d ldap backend
