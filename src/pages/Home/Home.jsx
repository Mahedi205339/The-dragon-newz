import Header from "../Sheared/Header/Header";
import Navbar from "../Sheared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h3 className="text-4xl font-poppins font-bold">This is home </h3>
        </div>
    );
};

export default Home;