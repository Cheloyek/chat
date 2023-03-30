const ws = require('ws')

//создаем ws cервер
const webSocketServer = new ws.Server({
    port: 3000,
    //в случае успешного запуска
}, () => console.log('Server started on 3000 port'))

//когда какой-то клиент подключается к серверу
webSocketServer.on('connection', function connection(ws) {
    //отправить на клиент сообщение
    // ws.send('Пользователь успешно подключился')

    //выполняется когда отправляется какое-либо сообщение
    ws.on('message', function (message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                //отправить всем сообщение
                broadcastMessage(message)
                break
            case 'connection':
                broadcastMessage(message)
                break
        }
    })
})

const message = {
    event: 'message/connection',
    id: 1,
    data: Date,
    username: 'user',
    message: 'message'
}

//отправить сообщение всем подключенным клиентам
const broadcastMessage = (message) => {
    webSocketServer.clients.forEach(client => client.send(JSON.stringify(message)))
}