(()=>{
/**
   const avenger = {
      name: 'captain',
      power: 'strength'         
   }
*/

   const extract = ({name,power}: any) =>{
      //const {name,power} = avenger;
      console.log(name);
      console.log(power);
   }
   //extract(avenger);

   const  avenger: string[] = ['Thor','Spiderman'];

   const [thor,spiderman] = avenger;
   //const [spiderman] = avenger;

   const extractArray = ([thor,spiderman]: string[]) =>{
      console.log(thor);
      console.log(spiderman);
   }

       
})();