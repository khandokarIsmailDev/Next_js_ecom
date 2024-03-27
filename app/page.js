import AllProduct from "@/components/AllProduct";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import data from '@/data/productData.json'


export default function Home() {
  return (
    <div>
      <Hero/>
      <AllProduct data={data}/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
