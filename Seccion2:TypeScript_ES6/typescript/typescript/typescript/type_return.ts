(()=>{

    const sum = (a:number, b:number): number => a + b; 

    const name = (): string => 'Hello World'

    const obtainSalary = (): Promise<string> => {
        return new Promise((resolve,reject) =>{
            resolve('Name');
        })
    }

    obtainSalary().then(a => console.log(a.toUpperCase));


})();