import React from 'react';
import { Circles } from 'react-loader-spinner'; 
import PropTypes from 'prop-types';

function Spinner({ message, loaderType = 'Circles' }) {
  const LoaderComponent = loaderType === 'Circles' ? Circles : null; 

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {LoaderComponent && (
        <LoaderComponent
          color="#00BFFF"
          height={50}
          width={200}
          className="m-5"
        />
      )}
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

Spinner.propTypes = {
  message: PropTypes.string.isRequired,
  loaderType: PropTypes.string,
};

export default Spinner;
