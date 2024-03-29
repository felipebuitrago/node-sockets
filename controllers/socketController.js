export const socketController = (socket) => {
    
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 12345678955555;
        callback( id );
        console.log(payload);

        socket.broadcast.emit('enviar-mensaje', payload );
    })
};