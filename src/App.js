import React from 'react';
import DifferenceFinder from './components/DifferenceFinder'; 
import './index.css'

const App = () => {
  return (
    <div>
      <h1 className='text-blue-400 mx-auto w-full text-center mb-10 mt-6 font-semibold'>List Difference Finder</h1>
      <DifferenceFinder /> 

    </div>
  );
};

export default App;
