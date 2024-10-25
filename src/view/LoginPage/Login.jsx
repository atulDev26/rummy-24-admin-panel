import React, { useEffect, useState } from "react";
import { IconEyeClosed, IconEye } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { loadingHide, loadingShow } from "../../utils/GlobalLoding/gloabalLoading";
import { postApi } from "../../api/callApi";
import { urlApi } from "../../api/urlApi";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const isValidForm =
    phone !== "" && isValidPhoneNumber(phone) && password.length >= 6;
    setIsFormValid(isValidForm);
  }, [phone, password]);

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    let inputValues = {
      mobile: e.target.phone.value,
      password: e.target.password.value,
    };
    loadingShow();
    let resp = await postApi(urlApi?.login,inputValues); 
    console.log('resp',resp);
    
    loadingHide();
    if(resp.responseCode === 200 ){
      localStorage.setItem("userData", JSON.stringify(resp.data));
      navigate("/dashboard",{replace: true})
    }else{
      toast.error(resp.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const isValidPhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-white"
      style={{
        backgroundImage: 'url("/Assets/images/cardsImage.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          <h1 className="text-4xl font-bold mb-6 text-center login-text-style">
            Login
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="phone"
                type="tel"
                maxLength={10}
                onKeyDown={handleKeyDown}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FABA1F]"
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                onKeyDown={handleKeyDown}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FABA1F]"
              />

              <div
                className="absolute inset-y-12 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <IconEye className="text-gray-500" />
                ) : (
                  <IconEyeClosed className="text-gray-500" />
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full bg-[#650C0C] text-white py-2 rounded-lg  transition duration-300${
                isFormValid
                  ? "bg-[#650C0C] hover:bg-[#FABA1F]"
                  : "bg-gray-400 cursor-not-allowed"
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
