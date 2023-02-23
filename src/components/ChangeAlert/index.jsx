import React from 'react';
import { withStorageListener } from './withStorageListener'
import './index.css';

const ChangeAlert = ({show, toggleShow}) => {
  if(show){
    return(
      <div className='containerAlert'>
        <p>hubo cambios</p>
        <button
          onClick={()=>toggleShow(!show)}>Reload</button>
      </div>
    )
  }else{return null}
}
const ChangeAlertStorageListener  = withStorageListener(ChangeAlert)
export  {ChangeAlertStorageListener}