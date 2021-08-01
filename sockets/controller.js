
const socketController = (socket) => {
    console.log('cliente conectado', socket.id);

    //cuando el cliente se desconecta
    socket.on('disconnect' , () => {
        console.log('cliente desconectado', socket.id);
    });

    //Escuchar eventos personalizados
    socket.on('enviar-mensaje', (payload, callback) => { //escucha eventos del cliente
        console.log('mensaje recibido', payload);
        callback(payload)

        //enviar mensaje a todos los clientes concetados
        socket.broadcast.emit('enviar-mensaje', payload);
    })
}


module.exports ={
    socketController
}