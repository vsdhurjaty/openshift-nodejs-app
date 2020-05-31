#base image
FROM node:alpine

#specify working dir
WORKDIR /usr/app

#Copy dependencies or the start script file
COPY ./package.json ./

#Install dependencies
RUN npm install

#Copy remaining files
COPY ./ ./

#Default Command
CMD ["npm", "start"]