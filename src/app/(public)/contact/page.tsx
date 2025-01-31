import { Breadcrumb } from '@/components/reuseable/Hero2'
import Services from '@/components/reuseable/Services'
import React from 'react'

const Contact = () => {
  return (
    <div>
       <Breadcrumb
            title="Contact"
            backgroundImage="/images/hero-2.jpg" 
            links={[
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ]}
          />
      <Services />
    </div>
  )
}

export default Contact