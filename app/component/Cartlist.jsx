import {useEffect, useState} from 'react'

export const CartData= () => {
    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/carts")
        .then((res) => res.json())
        .then((data) => {
          setCarts(data.carts);
        })
        .catch((error) => console.log(error))
    }, []);
    
  return (
    <div>Cart Data</div>
  )
}
