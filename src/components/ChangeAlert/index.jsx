import React from 'react';
import { withStorageListener } from './withStorageListener'
import './index.css';

const ChangeAlert = ({show, toggleShow}) => {
  if(show){
    return(
      <div className='containerAlert'>
        <p className='containerAlert_text'>hubo cambios</p>
        <button
          onClick={()=>toggleShow(!show)}
          className='containerAlert_button'>Reload</button>
      </div>
    )
  }else{return null}
}
const ChangeAlertStorageListener  = withStorageListener(ChangeAlert)
export  {ChangeAlertStorageListener}