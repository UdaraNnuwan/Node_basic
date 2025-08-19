
const fruits=["apple","Oramge"]

const getDetails=()=>{
    setTimeout(()=>{
       for(fruit of fruits){
        console.log(fruit)
       }
    },1000)
}

const post=(name)=>{
     setTimeout(()=>{
      fruits.push(name)
    },2000)
}

const postCallBack=(name,callBack)=>{
     setTimeout(()=>{
      fruits.push(name)
      callBack()
    },2000)
    
}
// getDetails()
// post("kiwi")
postCallBack("Papol",getDetails)
