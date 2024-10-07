import React from 'react';
import { GoogleLogin } from '@react-oauth/google'; 
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/background.jpg';
import logo from '../assets/logo.png';

import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (credentialResponse) => {
    const user = credentialResponse?.profileObj;

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      const { name, sub: googleId, picture: imageUrl } = user; 
      const doc = {
        _id: googleId,
        _type: 'user',
        userName: name,
        image: imageUrl,
      };

      client.createIfNotExists(doc).then(() => {
        navigate('/', { replace: true });
      });
    }
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img
          src={shareVideo}
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="Logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={responseGoogle} // Use onSuccess for handling success
              onFailure={responseGoogle} // Use onFailure for handling failures
              cookiePolicy="single_host_origin"
              logoAlignment="left"
              style={{ width: '100%' }}
            >
              <button
                type="button"
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              >
                <FcGoogle className="mr-4" /> Sign in with Google
              </button>
            </GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
