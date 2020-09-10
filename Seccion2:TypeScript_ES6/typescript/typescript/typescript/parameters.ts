(function(){

   //parameters order: Obligatory, optionals, default value

      function activate(who:string,moment?:string,object:string = 'batsignal'){
         if(moment){
            console.log(`${who} activate the ${object} at the ${moment}`);
         }
         else{
            console.log(`${who} activate the ${object}`);
         }
        
      }

      activate('Gordon','night');

    
})();