import gif from '../../../src/assets/header.gif'
import '../../Styles/header.css'
const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black via-slate-800 to-black pt-36 pb-20'>{/* bg-[#222222] */}
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
            <h1 className='text-white text-7xl font-bold leading-tight header-text'>Welcome To <br /> Your Personalize <br /> Profile Tracker</h1>
            <img src={gif} alt=""/>
        </div>
        </div>
    );
};

export default Header;