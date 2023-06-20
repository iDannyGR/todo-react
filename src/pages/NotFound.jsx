import React from 'react';
import '../assets/notFound.css';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

const NotFound = () => {
    
    const returnHandler = ()=>{
        console.log('hola mundo')
    }

    return (
      <div className="main">
        <h1 className="notfount_title">not found</h1>
        <button className="notfound_btn" onClick={returnHandler}>
          <ArrowBackIos />
        </button>
      </div>
    );
}

export default NotFound