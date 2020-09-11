(()=>{

   const removeMoney = (mount: number): Promise<number> =>{
      let currentMoney = 1000;

      return new Promise((resolve,reject) => {
         if(mount > currentMoney){
            reject('Insufficient Funds')
         }else{
             currentMoney -= mount;
             resolve(currentMoney);
         }
      });
   }

   removeMoney(500)
      .then(currentMount => console.log(`Current Mount: ${currentMount}`))
      .catch(console.warn);

       
})();