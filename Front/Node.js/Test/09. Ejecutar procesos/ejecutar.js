const exec= require('child_process').exec;

exec('dir',(err, stdout)=>{
    if(err){
        throw err;
    }
    console.log('Comando ejecutado correctamente');
    console.log(stdout);
});