(()=>{

   console.log('Start');

   //Promesa, resolve = correcto, reject = error
   const prom1 = new Promise((resolve,reject) => {
      setTimeout(() =>{
         reject('Time out finished');
      },1000)

   });

   //Then es la ejecución cuando se ejecuta todo exitosamente y catch cuando sucede un error
   prom1.then(message => console.log(message))
   .catch(err => console.warn(err));


   console.log('End');

       
})();