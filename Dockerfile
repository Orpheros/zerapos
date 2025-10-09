FROM node:22-slim as builder

WORKDIR /app

COPY package*.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .

RUN npm install

COPY . .

CMD ["npm", "run", "build"]

FROM nginx:1.25-alpine

COPY --from=builder /app/zerapos-fe /usr/share/nginx/html/zerapos-fe

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 755 /usr/share/nginx/html/zerapos-fe

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
