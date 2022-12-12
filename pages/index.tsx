import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";



const Home = () => {

  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
    .fetch(`/api/avo`)
    .then( (response) => response.json())
    .then( ({ data, length } ) => {
        setProductList(data)
    } )
    .catch( err => console.log(err) )
  }, [])
  

  return (
    <div>
        <Navbar/>
        <h1>Home</h1>
        {productList?.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
            {/* <img src={product.image}/> */}
          </div>
        ))}
    </div>
  )
}

export default Home;