FROM keymetrics/pm2:latest-slim
LABEL maintainer="AAMServices <info@aamservices.uk>"

WORKDIR /usr/src/app

COPY app/* /usr/src/app/

RUN npm install @feathersjs/cli -g && \
    cd /usr/src/app/feathersApp && \
	npm install

EXPOSE 3030

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
