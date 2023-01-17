/* eslint-disable */
import React, {useState} from 'react';
import './App.css';
import Modal from './components/bottomButton/bottomButton';
import Title from './components/topTitle/Toptitle';
import Nav from './components/topNav/TopNav';
import Shoes from './components/midShoes/midShoes';


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">

      <div className='Header'>
        <Title title = "NIKE"/>
      </div>

      <div>
        <Nav/>
      </div>

      <div className='Contents'>
        <Shoes/>
      </div>


      <div className='Btn_buy'>
        <button className='buy_button' style={{cursor:'pointer'}} onClick={openModal}>Buy Now</button>
        
        <Modal open={modalOpen} close={closeModal}>
          
        </Modal>
      </div>

    </div>


  );
}

export default App;
