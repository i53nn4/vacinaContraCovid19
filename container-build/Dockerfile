# pull the official base image
FROM node:18.2.0-alpine

# set your working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# fix permissions for packages
RUN npm config set unsafe-perm true

# install application dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g

# add app
COPY . ./

# add permission
RUN chown -R node /app/node_modules
USER node

ENV NODE_OPTIONS --openssl-legacy-provider

# will start app
CMD ["npm", "start"]
