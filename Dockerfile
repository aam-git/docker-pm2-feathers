FROM keymetrics/pm2:latest-slim
LABEL maintainer="AAMServices <info@aamservices.uk>"

WORKDIR /usr/src/app

COPY app/feathersApp/ /usr/src/app/

RUN npm install @feathersjs/cli -g && \
	npm install

EXPOSE 3030

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
