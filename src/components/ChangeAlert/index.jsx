import React from 'react';
import { useStorageListener } from './useStorageListener'
import './index.css';

const ChangeAlert = ({sincronize}) => {
  const {show, toggleShow} = useStorageListener(sincronize);
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

export  {ChangeAlert}