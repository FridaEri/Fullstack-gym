FROM node
COPY . /app
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]