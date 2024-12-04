const fs = require('fs');
const https = require('https');
const Gun = require('gun');
const express = require('express');

const app = express();
const port = 8765;

// HTTPS 证书
const options = {
  key: fs.readFileSync('server.key'), // 确保路径正确
  cert: fs.readFileSync('server.cert'),
};

app.use(Gun.serve); // 为 Gun.js 提供静态服务

// 创建 HTTPS 服务器
const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Gun relay server running at https://localhost:${port}/gun`);
});

// 初始化 Gun.js
Gun({ web: server });
