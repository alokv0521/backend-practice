const promiseOne =new Promise(function(resolve , reject){
    
    let error= false;
    setTimeout(function(){
        console.log("we are inside the promise ");
    }, 500)
    if(!error){
    resolve({username : "alok", pass: 123});
    }
    else {
        reject("ERROR")
    }

});

promiseOne
.then(function(e){

    console.log(typeof(e));
    const username=e.username;
    console.log(e); 
    return username  
}    
)
.then((username)=>{
    console.log("we are giving you the latest username if exist "+username);
    
})
.catch((e)=>{
    console.log(e);
    
})
;

// console.log("we are working");
