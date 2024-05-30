FROM node:20-bullseye

WORKDIR /opt/app

COPY . .

RUN npm install

EXPOSE 8080

# ENV MESSAGE my_message

CMD ["npm", "start"]