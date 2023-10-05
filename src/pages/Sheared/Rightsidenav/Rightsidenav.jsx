import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGithub } from 'react-icons/ai'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'



import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-6'>
                <h2 className="font-semibold text-lg">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <AiOutlineGithub></AiOutlineGithub>
                    Github
                </button>
            </div>
            <div className='p-4 space-y-4 mb-6'>
                <h2 className="font-semibold text-lg">Find Us on</h2>
                <a className='p-4 text-lg flex border rounded-t-lg items-center gap-2' href="">
                    <FaFacebook className='text-blue-600'></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 text-lg flex border  items-center gap-2' href="">
                    <FaTwitter className='text-sky-500'></FaTwitter>
                    Twitter
                </a>
                <a className='p-4 text-lg flex border rounded-b-lg items-center gap-2' href="">
                    <FaInstagram className='text-[#C13584]'></FaInstagram>
                    Twitter
                </a>

            </div>
            {/* Q zone  */}
            <div className='p-4 space-y-4 mb-6'>
                <h2 className="font-semibold text-lg">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
                

            </div>

        </div>
    );
};

export default RightSideNav;