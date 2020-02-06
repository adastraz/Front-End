import React, {useState} from "react";

function Footer() {
    return (
        <>
            <div className="footerTop">
                <div>
                    <img src={require("./img/Icon1.png")} alt='logo'/>
                </div>

                <div className="footerTopContent">
                    <div className="footerTopContentDiv">
                        <h5>Company</h5>
                        <h6>About Us</h6>
                        <h6>Blog</h6>
                        <h6>Careers</h6>
                    </div>

                    <div className="footerTopContentDiv">
                        <h5>Resources</h5>
                        <h6>FAQ</h6>
                        <h6>Contact Us</h6>
                        <h6>Support</h6>
                    </div>

                    <div className="footerTopContentDiv">
                        <h5>Follow Us</h5>
                        <h6>Twitter</h6>
                        <h6>Facebook</h6>
                        <h6>Instagram</h6>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <p>© Droom 2020 </p>
                <p>Privacy Policy</p>
                <p>{`Terms & Conditions`}</p>
            </div>
        </>
    );
}

export default Footer