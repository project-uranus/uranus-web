FROM nginx:latest
LABEL maintainer="rudeigerc@gmail.com"
COPY ./build/ /usr/share/nginx/html/
