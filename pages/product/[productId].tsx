import { useRouter } from "next/router"
import { useEffect, useState } from "react";

const ProductItem = () => {

  const [product, setProduct] = useState<TProduct>();


  const { query: { productId } } = useRouter();

  useEffect(() => {
    
    window.fetch(`/api/avo/${productId}`)
          .then( response => response.json() )
          .then( setProduct )
          .catch( err => console.log(err))

  }, [productId])
  

  return (
    <div>
        {product?.name}
    </div>
  )
}

export default ProductItem