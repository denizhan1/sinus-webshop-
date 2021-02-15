// get product api
export async function getAllProducts()
{
    const req= await fetch('http://localhost:5000/api/products/')
   const data= await req.json()
    return data
}
// user login api
export async function userLogin(user)
{
    let result= await fetch('http://localhost:5000/api/auth/',
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)

    });
    let data= await result.json()
    return data;
}

// register user api
export async function userToRegisterd(user)
{
    let result= await fetch('http://localhost:5000/api/register/',
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    });
    let data= await result.json();
    console.log(data)

}
// submit order api
export async function submitOrder(Order,token='') {
     let a = [];
    Order.forEach(element => {
        a.push(element._id)
    });
  let sendOrder=
    {
        
        timeStamp: Date.now(), 
        status: 'inProcess',
        orderValue: 999,
        items: a
    } 

  let result = await fetch('http://localhost:5000/api/orders/', {
            method: "POST",
            headers: {"Content-Type": "application/json",
                        'Accept':'application/json',
                        'Authorization':token
                        
                     },
            body: JSON.stringify(sendOrder)
        });
        let y = await result.json()
        console.log(y);
      
}
// get order api
export async function getUserOrders(token){
    let result = await fetch('http://localhost:5000/api/orders/',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }

        });
    let data = await result.json()
    return data

}
    