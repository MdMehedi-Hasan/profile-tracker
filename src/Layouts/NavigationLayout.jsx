import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";


const NavigationLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default NavigationLayout;