(function(){

   let myFunction = function(a:string){
      return a;
   }

   let sumN = function(a:number, b:number){
      return a + b;
   }

   const myFunctionArrow = (a:string) => a;  

   const sumA = (a:number, b:number) => a+b;

   const hulk = {
      name: 'hulk',
      smash(){
         setTimeout(() => {
            console.log(`${this.name} smash!!!`)
         },1000);

      }
   }

   hulk.smash();

    
})();