let persona = new Persona('Bob');

persona.on('hablar', (mensaje)=>{
    console.log(`${persona.nombre}: ${mensaje}`);
});

persona.emit('hablar', 'Hoy es un gran día');