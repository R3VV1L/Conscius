# Используем официальный образ Node.js
FROM node:latest

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Открываем порт, на котором будет работать приложение
EXPOSE 5172

# Запускаем приложение
CMD ["npm", "start"]