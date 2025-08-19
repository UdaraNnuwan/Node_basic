const fruits = ["apple", "Oramge"]

const getDetails = () => {
    setTimeout(() => {
        for (fruit of fruits) {
            console.log(fruit)
        }
    }, 1000)
}

const post = name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fruits.push(name)
             let err = false
        if (!err) {
            resolve()
        } else {
            reject("Somthing went wrong")
        }
        }, 2000)

       
    })
}

const init=async()=>{
   try{
    await post("Pine apple")
    getDetails()
   }
   catch(err){
    console.log(err)
   }
}

init()

