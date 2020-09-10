import React, { useContext } from 'react';
import './App.css';
import { Whatsapp } from './Components/Whatsapp';
import { MainContext } from './Context/MainContext';
import { SetMessage } from './Components/SetMessage';

function App() {

  const { MsgThere } = useContext(MainContext)

  if (!MsgThere) {
    return (
      <center>
          <h1>🚀 Whatsapp Txt Reader 📱</h1>
          <p>We Export chat when it is really important. but when we try to read it later i really becomes a tough job to read it line by line</p>
          <p>So this is my Web App, which will help you to Read exported data chats in this</p>
          <p>Just copy paste that exported chat here and BOOM <span>🚀</span> . You wil Have your chat well Designed and easy to understand</p>
         
        <SetMessage />
      </center>
    )
  }

  return (
    <div>
      <Whatsapp />
    </div>
  );
}

export default App;
