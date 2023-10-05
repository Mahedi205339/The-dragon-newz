import { useParams } from "react-router-dom";
import Header from "../Sheared/Header/Header";
import RightSideNav from "../Sheared/Rightsidenav/Rightsidenav";
import Navbar from "../Sheared/Navbar/Navbar";

const NewsPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-xl md:text-3xl lg:text-4xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsPage;