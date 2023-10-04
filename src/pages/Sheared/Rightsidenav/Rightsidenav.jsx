import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGithub } from 'react-icons/ai'
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

        </div>
    );
};

export default RightSideNav;