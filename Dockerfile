FROM node:latest
MAINTAINER Yevgeny Shirin <yevgeny.shirin@gmail.com>

WORKDIR /code
COPY . /code

RUN \
  npm install -g ember-cli bower && \
  npm install && \
  bower install --allow-root

ENTRYPOINT ["ember", "server"]
