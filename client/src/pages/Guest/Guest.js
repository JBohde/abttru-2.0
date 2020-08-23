import React from "react";
import Carousel from "../../components/Carousel";
import Logo from '../Home/Logo/Logo';
import "./Guest.css";

class Guest extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          <Logo className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
        </div>
        <h5>
        </h5>
        <Carousel pathName={this.props.match.path} className="guest-carousel" />
      </div>
    )
  }
}

export default Guest;