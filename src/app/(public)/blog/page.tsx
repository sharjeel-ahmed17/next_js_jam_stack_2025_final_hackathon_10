import { Breadcrumb } from "@/components/reuseable/Hero2"
import Services from "@/components/reuseable/Services"


function Blog() {
  return (
    <div>
       <Breadcrumb
            title="Blog"
            backgroundImage="/images/hero-2.jpg" 
            links={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
            ]}
          />
      <Services />
    </div>
  )
}

export default Blog