import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className='Parentbox'>
      <FotoProduk />
      <ProdukInfo category="LEBARAN" />
    </div>
  );
}

function FotoProduk() {
  return(
    <div className='Foto'>
        <img src='https://m.media-amazon.com/images/I/51o16gI6AdL._AC_UL1100_.jpg' alt='FotoProduk' />
      </div>
  );
}

function ProdukInfo(props) {

  const {category} = props;

  return (
    <div>
      <div className='Deskripsi'>
        <p className='Cate'>{category}</p>
        <h1 className='Title'>Pinky Swagg</h1>
        <p className='Price'>IDR 73.309.399</p>
        <p className='Info'>
          One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features
          lightweight, visible cushioning just like the original from '88. Signature details and 
          materials celebrate the game-changing icon.
        </p>
      </div>
    </div>
  );
}

export default App;
