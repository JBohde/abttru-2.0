/* eslint-disable global-require */
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd } from '@fortawesome/free-solid-svg-icons';

const logoStyle = {
  width: '75px',
  height: 'auto',
  margin: '5px 5px 15px 5px',
  float: 'left'
};

const Footer = () => (

    <div className="footer" >
        <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 about">
                <img className="brand"src={require('./icons/abttru-logo2.png')} style={logoStyle} alt="logo" />
                <p className="mission">Our application was created with a passion for food and connects you to recipes from all over the web, and helps your dietitian convey their recommendations to you dynamically. You pick the ingredients, we make a better you.</p>
            </div>
            <div className="col-6 col-sm-6 col-md-2 col-lg-2 blah">
                <h5 className="footnav"> Resources </h5>
                <ul className="list-unstyled quick-links">
                    <li><a href="https://github.com/a-better-you-2/abttru-2.0#abttru-20" target="_blank" rel="noopener noreferrer"><p className="icon"><i className="fa fa-angle-double-right"></i>Readme</p></a></li>
                </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-2 col-lg-2 blah">
                <h5 className="footnav"> Navigation </h5>
                <ul className="list-unstyled quick-links">
                    <li>
                        <h3 className="footnav">
                            <a href="/login/doctor"><FontAwesomeIcon icon={faUserMd} className="icon" /> </a>
                            <a href="/login/user"><FontAwesomeIcon icon={faUser}className="icon" /></a>
                        </h3>
                    </li>
                </ul>
            </div>

            {/* </div> */}
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                <div className="hermanos" >
                    <h5>Connect with our team!</h5>
                    <a href="https://github.com/a-vargasmarte" target="_blank" rel="noopener noreferrer"><img className="bitmoji" src={require('./icons/bitmojiAlberto.png')} alt="bitmoji of alberto" /></a>
                    <a href="https://github.com/JBohde" target="_blank" rel="noopener noreferrer"><img className="bitmoji" src={require('./icons/bitmojiJoshua2.png')} alt="bitmoji of joshua" /></a>
                    <a href="https://github.com/DaveyStacks" target="_blank" rel="noopener noreferrer"><img className="bitmoji" src={require('./icons/bitmojiDavey.png')} alt="bitmoji of davey" /></a>
                </div>
            </div>
        </div>
        {/* <div className="copy">&copy; A Better You 2018</div> */}
    </div>

);

export default Footer;
