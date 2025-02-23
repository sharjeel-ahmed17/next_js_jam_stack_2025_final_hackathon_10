// import CheckoutForm from '@/components/checkout/CheckoutForm'
import { Breadcrumb } from '@/components/reuseable/Hero2'
import Services from '@/components/reuseable/Services'


const Checkout = () => {
  return (
    <div>
       <Breadcrumb
            title="Checkout"
            backgroundImage="/images/hero-2.jpg" 
            links={[
              { name: "Home", href: "/" },
              { name: "Checkout", href: "/checkout" },
            ]}
          />
          {/* <CheckoutForm /> */}
      <Services />
    </div>
  )
}

export default Checkout