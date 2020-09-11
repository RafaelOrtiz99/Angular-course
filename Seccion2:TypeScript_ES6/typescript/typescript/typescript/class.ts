(()=>{

//   class Avenger{
//      name: string;
//      team: string;
//      realName: string;
//      fight: boolean;
//      winFights: number


//      constructor(name:string,team:string,realName:string,fight:boolean,winFights:number){
//         this.name = name;
//         this.team = team;
//         this.realName = realName;
//         this.fight = fight;
//         this.winFights = winFights;
//      }
//   }

      class Avenger{ 
        constructor( public name?: string,
                     public team?: string,                  
                     public realName?: string,
                     public fight?: boolean,
                     public winFights?: number, ){}
      }

   const antman = new Avenger('Antman');
   console.log(antman);
       
})();