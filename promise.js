

const promise1 = new Promise((resolve,reject)=>{
    const num = Math.random();
    console.log(num);
    if(num>0.5)
    {        
        resolve('Resolved');
    }
    else
    {
        reject('Rejected');
    }
});


promise1.then((msg)=>{
    console.log(msg);
})
.then(()=>{
    
})
.catch(()=>{
    console.log('Error Occcured');
})


const promise2 = new Promise((resolve,reject)=>{
    let err = false;
    if(!err)
    {
        resolve({Message:"Promise 2 Resolved", user:"Vikas"});


    }
    else
    {
        reject({ErrorMsg:"Something Went Wrong"});
    }
});

async function getData() {
    try {
        const response = await promise2;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

getData();