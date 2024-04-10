FROM node:20-alpine
WORKDIR /travel
COPY package*.json ./
COPY tailwind.config.js  postcss.config.js ./
RUN npm i 
COPY . .
EXPOSE 5173
CMD npm run dev
