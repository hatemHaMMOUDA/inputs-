import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Test from './test.js'
import './styles.css'
 class App extends React.Component {
  render() {
    return (
      <>
        <center>
          <h1 className="mb-4"> بسم الله الرحمان الرحيم</h1>
          <h4 className="mt-4">React: two-way data binding</h4> 
<div className="myStyle">
  <Test/>
</div>      


</center>
      </>
    );
  }
}

export default App ; 

