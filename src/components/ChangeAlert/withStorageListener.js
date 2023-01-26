import React, {useState} from 'react';


function withStorageListener(WrappedComponent){
    return function WrappedComponentListener (props){
            const [storageChange, setStorageChange] = useState(false);
            window.addEventListener('storage', (change)=>{
                    change.key === 'TODOS_V1' && setStorageChange(true) && console.log('hubo cambio') 
            });
        return <WrappedComponent 
                    show={storageChange}
                    toggleShow={setStorageChange}
                        
                        />
    }
}

export {withStorageListener}