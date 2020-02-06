import React, {useState} from "react";
import {Container, Row, Col, Form} from 'reactstrap';
import '../index.css';

function Footer() {
    return (
        <>
            <div className="footerTop" style={{
                backgroundColor: "#b5b5b5",
                borderTop: '1px solid grey',
                padding: "2rem 3rem 1rem 3rem",
                display: 'flex',
                justifyContent: 'space-evenly' 
            }}>

                <div>
                    <img src={require("./img/Icon1.png")} alt='logo'/>
                </div>

                <div style={{
                display: 'flex'
                }}>
                    <div style={{
                        margin: '0 2rem 0 0rem'
                    }}>
                        <h5>Company</h5>
                        <h6>About Us</h6>
                        <h6>Blog</h6>
                        <h6>Careers</h6>
                    </div>

                    <div style={{
                        margin: '0 2rem 0 0rem'
                    }}>
                        <h5>Resources</h5>
                        <h6>FAQ</h6>
                        <h6>Contact Us</h6>
                        <h6>Support</h6>
                    </div>

                    <div>
                        <h5>Follow Us</h5>
                        <h6>Twitter</h6>
                        <h6>Facebook</h6>
                        <h6>Instagram</h6>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: "#b5b5b5",
                borderTop: '1px solid grey',
                padding: '1rem 3rem 0 3rem',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <p style={{marginRight: '2rem'}}>© Droom 2020 </p>
                <p style={{marginRight: '2rem'}}>Privacy Policy</p>
                <p>{`Terms & Conditions`}</p>
            </div>
        </>
    );
}

export default Footer