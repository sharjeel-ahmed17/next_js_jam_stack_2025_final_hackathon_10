import { Breadcrumb } from "@/components/reuseable/Hero2"


const Shop = () => {
  return (
    <div>
     <Breadcrumb
      title="Shop"
      backgroundImage="/images/hero-2.jpg" 
      links={[
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
      ]}
    />

    </div>
  )
}

export default Shop