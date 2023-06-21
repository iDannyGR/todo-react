import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../assets/notFound.css';
import Lottie from "lottie-react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AnyNotFound from '../assets/Lottie/search-not-found.json';

const NotFound = () => {
    const navigate = useNavigate()
    const returnHandler = ()=>{
        navigate('/');
    }

    return (
      <div className="main">
        <Lottie
          animationData={AnyNotFound}
          loop={true}
          style={{ height: "300px", width: "300px", margin: "5% auto" }}
        />
        <h1 className="notfount_title">not found</h1>
        <button className="notfound_btn" onClick={returnHandler}>
          <ArrowBackIcon fontSize="large" />
        </button>
      </div>
    );
}

export default NotFound