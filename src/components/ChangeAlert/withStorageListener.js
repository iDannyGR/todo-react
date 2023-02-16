import React, {useState} from 'react';


function withStorageListener(WrappedComponent){
    return function WrappedComponentListener (props){
            const [storageChange, setStorageChange] = useState(false);
            
            window.addEventListener('storage', (change)=>{
                    change.key === 'TODOS_V1' && setStorageChange(true) 
            });
            
            const toggleShow = ()=>{
                props.sincronize()
                setStorageChange(false)
            };
        return <WrappedComponent 
                    show={storageChange}
                    toggleShow={toggleShow}
                        />
    }
}

export {withStorageListener}