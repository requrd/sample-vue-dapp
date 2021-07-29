FROM node:16.5.0-buster
RUN apt -y update && apt -y upgrade && \
    npm install -g npm truffle
WORKDIR /home
