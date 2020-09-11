(()=>{

   interface Xmen{
      name: string,
      age: number,
      power?: string //Optional
   }

  const sendMission = (xmen: Xmen) =>{
     console.log(`Send to ${xmen.name} to the mission`);
  }

  const wolverine: Xmen = {
     name: 'logan',
     age: 60
  };

  sendMission(wolverine);
       
})();