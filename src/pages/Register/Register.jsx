import { useContext } from "react";
import Navbar from "../Sheared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {

    const { createUser } = useContext(AuthContext);




    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name')
        console.log(email, name, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.error(error))
    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder=" your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="mb-4 text-center">Already have an account ? Please <Link className="font-bold text-blue-600 underline" to="/login">Login</Link> </p>
                </div>
            </div>
        </div>

    );
};

export default Register;