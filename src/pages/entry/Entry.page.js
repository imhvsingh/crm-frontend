import React, {useState} from "react";


import {LoginForm} from "../../components/login/Login.comp";
import {ResetPassword} from "../../components/password-reset/PasswordReset.comp";

import "./entry.style.css";

export const Entry = () => {
const [frmLoad, setfrmLoad] = useState('login');

const handleOnResetSubmit = e => {
  e.preventDefault()
};

const formSwitcher = frmType =>{
    setfrmLoad(frmType);
}

return (
        <div className="entry-page bg-info">
            <div className="p-5 mb-4 bg-light rounded shadow">
              {frmLoad === "login" && <LoginForm  
            formSwitcher={formSwitcher}
            />}

              {frmLoad === "rest" && (
              <ResetPassword 
            //handleOnChange={handleOnChange} 
            handleOnResetSubmit={handleOnResetSubmit} 
            formSwitcher={formSwitcher}
            //email={email}
            />)} </div>
        </div>
      );
};