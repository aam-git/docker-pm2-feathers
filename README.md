Docker PM2 Feathers v1.0
========
powered by pm2:latest-slim image

[Feathers][1] A framework for real-time applications and REST APIs.


Instructions for Composer
========

```
1) choose one of the 3 versions below
master - $ curl -sSL https://raw.githubusercontent.com/aam-git/docker-pm2-feathers/master/app/ecosystem.config.js > docker-compose.yml
development - $ curl -sSL https://raw.githubusercontent.com/aam-git/docker-pm2-feathers/development/app/ecosystem.config.js > docker-compose.yml

2) $ docker-compose up -d

2) go to your web url (eg. http://127.0.0.1:3030)
```


Available tags you can use in docker compose (default master): master, minimal or caviar

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