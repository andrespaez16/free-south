FROM node:16-alpine
WORKDIR /app
COPY ./build /app
RUN npm i -g serve
RUN adduser -D andres
RUN chown -R andres /app
EXPOSE 3000
USER andres
ENTRYPOINT [ "serve", "-s", "/app", "-p", "3000" ]