
// loads all products from the database 
export async function getAllProducts()
{
    const req= await fetch('http://localhost:5000/api/products/')
   const data= await req.json()
    return data
}
// sends user email and password and authenticated user can login
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

// registers a new user and sends  to user databse
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
// submit order to order database and at the same time order id is added to user database
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
// returns  all orders ordered by registered in user
export async function getUserOrders(token){
    console.log('getuserorder', token)
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
    