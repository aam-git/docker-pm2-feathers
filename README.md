Docker PM2 Feathers v1.0
========
powered by pm2:latest-slim image

[Feathers][1] A framework for real-time applications and REST APIs.


Instructions for Composer
========

Available tags you can use in docker compose (default master): master or development

## docker-compose.yml

```yaml
version: '2'
services:
  mongo:
    image: mongo
    hostname: mongo
    restart: unless-stopped
    networks:
      - internal
    volumes:
      - mongodb_data:/data/db
  feathers:
    image: aamservices/pm2-feathers:latest
    restart: unless-stopped
    volumes:
      - feathers_data:/usr/src/app
    networks:
      - internal
    ports:
      - 1337
    depends_on:
      - mongo
volumes:
  mongodb_data:
    driver: local
  feathers_data:
    driver: local
```


[1]: https://feathersjs.com
