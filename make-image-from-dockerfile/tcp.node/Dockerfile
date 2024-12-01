# Linux x64
FROM node:current-alpine

# 컨테이너안에 앱을 위한 폴더만들기
RUN mkdir -p /usr/src/app

# (.)를 /usr/src/app에 복사
COPY . /usr/src/app

# 컨텍스트에 workdir 설정
WORKDIR /usr/src/app

# package.json에 있는 종속성 설정
RUN npm install

# port 
EXPOSE 8080

# 시작되는 프로그램 지정
ENTRYPOINT [ "node", "app.js" ]