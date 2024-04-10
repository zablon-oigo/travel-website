FROM node:20-alpine
WORKDIR /travel
COPY package*.json ./
RUN npm i 
COPY . .
EXPOSE 5173
CMD npm run dev
