export async function getAllProducts(){
    const req= await fetch('http://localhost:5000/api/products/')
   const data= await req.json()
    return data
}