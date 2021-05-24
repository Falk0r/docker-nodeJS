FROM node:16-alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN npm install -g nodemon

WORKDIR /code

# COPY app.js .

EXPOSE 5000

CMD [ "nodemon", "/code/app.js" ]