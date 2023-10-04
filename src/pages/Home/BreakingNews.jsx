import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex items-center">
            <button className="text-white py-1 h-14 px-2 md:w-40 bg-red-600 rounded-lg">Breaking News</button>
            <Marquee pauseOnHover={true} speed={70}>
            <p className="md:text-xl text-sm font-semibold">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;