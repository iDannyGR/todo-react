import React from 'react';
import { withStorageListener } from './withStorageListener'

const ChangeAlert = ({show, toggleShow}) => {
  return (
    show ? <div>hubo cambio</div> :
           <div>no cabio nada</div>
  )
}
const ChangeAlertStorageListener  = withStorageListener(ChangeAlert)
export  {ChangeAlertStorageListener}