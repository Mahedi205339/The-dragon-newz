import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className=" text-center mt-3 md:mt-6 lg:mt-10 mb-2 md:mb-5 lg:mb-10">
            <div className='flex justify-center'>
                <img className='w-52 md:w-96 lg:w-[460px]' src={logo} alt="" />
            </div>

            <p className='my-3 text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;