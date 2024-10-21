import React, { useEffect, useState } from 'react';
import {IconEyeClosed,IconEye} from '@tabler/icons-react';
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const isValidForm = email !== '' && isValidEmail(email) && password.length >= 6;
    setIsFormValid(isValidForm);
  }, [email, password]);

  const handleFormSubmit=(e)=>{
    e.preventDefault()
    console.log(e)
    let inputValues ={
        email: e.target.email.value,
        password:e.target.password.value
    }
    console.log(inputValues)
  }


  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };  
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white"
    style={{
        backgroundImage: 'url("/Assets/images/cardsImage.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md flex">
        <div className="hidden md:flex flex-col justify-center items-center w-1/2  p-6 rounded-l-lg">
          <img
            src={process.env.PUBLIC_URL + "/Assets/Images/rummyLogo.webp"}
            alt="Logo"
            className="w-48 h-48 object-contain mb-4"
          />
          {/* <h2 className="text-blue-500 text-3xl font-bold">Welcome Back!</h2> */}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
          <h1 className="text-4xl font-bold mb-6 text-center login-text-style">Login</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FABA1F]"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                onKeyDown={handleKeyDown}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? 'text' : 'password'}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FABA1F]"
              />

              <div
                className="absolute inset-y-12 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ?  <IconEye className="text-gray-500" />:<IconEyeClosed className="text-gray-500" /> }
              </div>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full bg-[#650C0C] text-white py-2 rounded-lg  transition duration-300${
                isFormValid ? 'bg-[#650C0C] hover:bg-[#FABA1F]' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
