import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescBox from '../Components/DescBox/DescBox';
import RelatedProducts from '../Components/Relatedproducts/RelatedProducts';

const Product = () => {

  const {data_product} = useContext(ShopContext);
  const {productId}= useParams();
  const product = data_product.find((e)=> e.id=== Number(productId))
  return (
    <div >
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescBox/>
      <RelatedProducts/>

      
    </div>
  )
}

export default Product
