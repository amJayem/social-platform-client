import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthProvider from "../../hooks/useAuthProvider";
import NavHeader from "../shared/NavHeader";
import SocialLogin from "./SocialLogin";
import { toast } from 'react-hot-toast';

const Register = () => {
  const { user, signUp } = useAuthProvider();
  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    signUp(email, password)
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.error('signup error => ',e);
    })
  };
  
  if(user?.uid){
    toast.success('Register successful');
    navigate('/');
  }
  
  return (
    <div>
      <NavHeader />
      <div>
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample"
                />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={handleRegister}>
                  <SocialLogin/>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                  </div>

                  {/* <!-- Name input --> */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="name"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className="text-center lg:text-left mb-20">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Signup
                    </button>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                      Already have an account!
                      <Link
                        to="/login"
                        href="#!"
                        className="text-green-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
