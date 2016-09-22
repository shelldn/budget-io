FROM node
MAINTAINER Yevgeny Shirin <yevgeny.shirin@gmail.com>
RUN apt-get update
RUN npm install -g ember-cli
RUN npm install -g bower
