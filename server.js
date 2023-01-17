const express = require('express');
const path = require('path');
const app = express();


const http = require('http').createServer(app);

// CORS(브라우저가 보안상의 이유로 API를 차단하는 현상) 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));


// 메인페이지 접속 시 build 폴더의 index.html 보내줘
app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
})

//React는 자체적으로 react-router-dom으로 라우팅
app.get('*', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
  });

// 8080번 포트에서 서버를 실행할거야
http.listen(8080, () => {
    // 서버가 정상적으로 실행되면 콘솔창에 이 메시지를 띄워줘
    console.log("Listening on 8080");
});
