import React, { useState, useEffect } from 'react';
import tableOption from './tableOption';
import DataTable from './DataTable';
import data from './data';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <DataTable userData={data} tableOption={tableOption} />
    </div>
  );
}
