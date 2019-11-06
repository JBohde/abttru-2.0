import React from "react";
// import { Button, Carousel } from "reactstrap";
// import axios from "axios";

class OurItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      data: this.props,
      index: 0,
      direction: null,
      user_id: "5aeccb14e21ebe39bce2f568"
    };
  }
}

export default OurItem;