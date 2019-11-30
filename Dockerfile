FROM nginx:latest
LABEL maintainer="rudeigerc@gmail.com"
COPY ./build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
