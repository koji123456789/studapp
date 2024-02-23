import './App.css';
import Navbar from './component/Navbar';
import Stu from './component/Stu';
import { Route, Routes } from 'react-router-dom';
import View from './component/View';
import Cart from './component/Cart';
import Frm from './component/Frm';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element ={<Stu/>} />
        <Route path='/a' element ={<View/>} />
        <Route path='/c' element={<Cart/>} />
        <Route path='/f' element={<Frm method='post' data={{id:"",name:"",age:"",dept:""}} action="/add"/>} />
      </Routes>
    </div>
  );
}

export default App;
