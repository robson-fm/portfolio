
import React, { useState } from 'react';

import './styleDark.css';


function MudaModo() {

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>Alterar Tema</button>
      <body className="dark">
       
      </body>
    </div>
  );
}

export default MudaModo;









