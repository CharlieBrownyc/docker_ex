# base image
FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

# package.json에 명시된 종속성 다운로드
RUN npm install

# COPY <local file or directory> <image directory>
# copy package.json, server.js -> image root directory
COPY ./ ./

# server.js 실행
CMD [ "node", "server.js" ]