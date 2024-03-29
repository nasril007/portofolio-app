import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1> MY PORTOFOLIO </h1>
                <Typed 
                  className="typed-text"
                  strings={['Web Design', 'Web Development', 'Content Creator', 'Grafis Design']}
                  typeSpeed={40}
                  backSpeed={60}
                />
             <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;