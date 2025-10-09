FROM node:22-slim

WORKDIR /app

COPY package*.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY tsconfig.node.json .

RUN npm install

COPY . .

CMD ["npm", "run", "build"]

FROM nginx:1.25-alpine

COPY /app/zerapos-fe /usr/share/nginx/html/zerapos-fe

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 755 /usr/share/nginx/html/zerapos-fe

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
