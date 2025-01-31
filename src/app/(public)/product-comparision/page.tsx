import { Breadcrumb } from '@/components/reuseable/Hero2'
import Services from '@/components/reuseable/Services'
import React from 'react'

const ProductComparision = () => {
  return (
    <div>
       <Breadcrumb
            title="Product Comparision"
            backgroundImage="/images/hero-2.jpg" 
            links={[
              { name: "Home", href: "/" },
              { name: "Product Comparision", href: "/product-comparision" },
            ]}
          />
        <Services />
    </div>
  )
}

export default ProductComparision