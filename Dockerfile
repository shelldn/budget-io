FROM nginx:latest
MAINTAINER Yevgeny Shirin <yevgeny.shirin@gmail.com>

COPY dist usr/share/nginx/html
