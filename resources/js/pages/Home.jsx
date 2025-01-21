import Products from "../components/Products";
import Slider from "../components/slider";
import Team from "../components/Team";
import OurWork from "../components/OurWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home ()
{
    return (
        <>
            <Slider />
            <div className="md:container md:mx-auto px-4">
                <Products />
                <Team />
                <OurWork />
                <Contact />
            </div>
            <Footer />
        </>
    );
}
