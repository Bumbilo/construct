# Specify a base image
FROM node:alpine

# Define work directy
WORKDIR /app

# Copy files from './package.json' to './'
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy files from './' to './'
COPY . .

#Default command
CMD ["npm", "start"]