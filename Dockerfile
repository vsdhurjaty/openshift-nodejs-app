#base image
FROM node:alpine

#specify working directory
WORKDIR /usr/app

#Copy dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install

#Copy Remaining Files
COPY ./ ./

#Default Command
CMD ["npm", "start"]