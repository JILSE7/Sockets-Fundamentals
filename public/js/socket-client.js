console.log('hola');

const socket = io();

const online = document.querySelector('#online')
const ofline = document.querySelector('#ofline')
const input =document.querySelector('#input');
const boton = document.querySelector('#boton');
const pre = document.querySelector('#mensaje');



//Cuando nos conectamos
socket.on('connect', () => {
    console.log('Conectado');
    ofline.style.display = 'none';
    online.style.display = 'block';
});

//Cuando nos desconectamos
socket.on('disconnect', () => {
    console.log('Desconectado');
    online.style.display = 'none';
    ofline.style.display = 'block';
});


//Escuchando mensaje personalizado del servidor
socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
    pre.textContent= JSON.stringify(payload,null,2);

    
})


boton.addEventListener('click', (e) => {
    const mensaje = input.value;
    
    const payload = {
        mensaje,
        id: Date.now(),

    }
    //mandar mensaje al servidor
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Contestando al cliente que me solicito', id);
    });

    console.log('mensaje enviado');
})