// import { Fragment } from "react";
import { Link } from "react-router-dom";
const Product = () => {
  return <section>
      <h1>A product page</h1>
      <ul>
         <li> <Link to="/product/p1">A book</Link></li>
         <li><Link to="/product/p2">A carpet</Link></li>
         <li><Link to="/product/p3">A gun</Link></li>

      </ul>
  </section>
  
};

export default Product;
