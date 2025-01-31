import CartTable from '@/components/cart/CartTable'
import { Breadcrumb } from '@/components/reuseable/Hero2'
import Services from '@/components/reuseable/Services'
import React from 'react'

const Cart = () => {
  return (
    <div>
       <Breadcrumb
            title="Cart"
            backgroundImage="/images/hero-2.jpg" 
            links={[
              { name: "Home", href: "/" },
              { name: "Cart", href: "/shop" },
            ]}
          />
      <CartTable />
      <Services />
    </div>
  )
}

export default Cart