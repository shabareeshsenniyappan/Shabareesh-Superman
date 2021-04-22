import React from 'react';
import sman from '../Images/sman.png'



const Header = () => {
    return (
        <div class="row" style={{backgroundColor:"#f0ad4e",padding:"12px"}}>
            <div class="col"> 
            <img src={sman} alt="Super" width="65px"/>
            </div>

            <div class="col-sm-3 d-flex align-content-center flex-wrap ">
                <h1 style={{color:"#e60000"}}>Shabareesh Senniyappan</h1>
            </div>
            
        </div>
    );
};




export default Header;
