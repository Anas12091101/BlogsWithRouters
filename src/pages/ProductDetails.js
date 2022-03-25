import { useParams } from "react-router-dom";

const ProductDetail=()=>{
    const params=useParams();
    // console.log(params.key)
    return <h1>Product {params.key}</h1>
}

export default ProductDetail;