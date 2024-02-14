let a = 10
let b = 20;

const waiting = new Promise((resolve,resject)=>{
      b = 30;
      setTimeout(()=>{
        resolve(30)
      },2000);
})

waiting.then((data)=>{
    console.log(a+data);
})