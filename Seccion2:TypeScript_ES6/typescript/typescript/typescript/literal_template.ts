(function(){

   const NAME = 'name';
   const LASTNAME = 'lastname';
   const AGE = 21;
   const OUTPUT = `${NAME} ${LASTNAME} (${getAge()})`

   function getAge(){
      return 100 + 100 + 300;
   }

   console.log(OUTPUT);

    
})();