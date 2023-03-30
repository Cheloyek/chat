// import express from 'express';
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
//
// app.get('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
// });
//
// server.listen(3000, () => {
//     console.log('listening on *:3000');
// });

import React from "react";
// const PORT = 3000
// const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8')
//
//
// const httpServer = require('http').createServer((req: any, res: any) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.setHeader('Content-Length', Buffer.byteLength(content))
//     res.end(content)
// })
//
// const io = require('socket.io')(httpServer)
//
// io.on('connection', (socket: any) => {
//     console.log('Подключение установлено')
//
//     let counter = 0
//     setInterval(() => {
//         // отправляем данные клиенту
//         socket.emit('hello', ++counter);
//     }, 1000)
//
//     // получаем данные от клиента
//     socket.on('hi', (data: any) => {
//         console.log('hi', data)
//     })
// })
//
// httpServer.listen(PORT, () => {
//     console.log('Перейдите на http://localhost:3000')
// })