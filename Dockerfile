FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]