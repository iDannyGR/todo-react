import React, {useState} from 'react';


function withStorageListener(WrappedComponent){
    return function WrappedComponentListener (props){
            const [storageChange, setStorageChange] = useState(false);
            window.addEventListener('storage', (change)=>{
                    change.key === 'TODOS_V1' ?
                   console.log('hubo cambios')  && setStorageChange(true) :
                    console.log('nada aqui')
            });
        return <WrappedComponent 
                    show={storageChange}
                    toggleShow={setStorageChange}
                        
                        />
    }
}

export {withStorageListener}