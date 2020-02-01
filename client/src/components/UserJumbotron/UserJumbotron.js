import React from "react";
import { Jumbotron, Container, Row, Col, Button, Media } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import cholesterolIcon from "./cholesterol.png";
import glucoseIcon from "./glucometer.png";
import restrictionIcon from "./icons8-no-entry-512.png";
import pressureIcon from "./pressure.png";
import recipeIcon from "./recipe.png";
import tapeIcon from "./tape.png";
import dietIcon from "./diet.png";
import searchIcon from "./search.png";
import "./UserJumbotron.css";

class UserJumbotron extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {
      userId,
      riskFactor,
      dietLabel,
      waist,
      bpSystolic,
      bpDiastolic,
      healthLabel,
      isUserPage
    } = this.props;

    this.state = {
      waist,
      bpSystolic,
      bpDiastolic,
      userId,
      riskFactor,
      dietRecommendation: dietLabel,
      dietRestriction: healthLabel,
      isUserPage,
      savedTab: "",
      profileTab: ""
    };
  }

  fontAwesomeColor = () =>
    this.props.riskFactor === "high-cholesterol" ? "red" : "black";

  profileTabColor = () => (this.props.isUserPage ? "#F3F0DD" : "#2C3E50");

  savedTabColor = () => (this.props.isUserPage ? "#2C3E50" : "#F3F0DD");

  render() {
    const {
      userId,
      firstName,
      lastName,
      userPhoto,
      waist,
      bpSystolic,
      riskFactor,
      dietLabel,
      dietRestriction
    } = this.props;

    return (
      <Jumbotron className="jumbo">
        <Container>
          <Row className="patient-profile">
            <Col xs={12} md={4}>
              <div className="user-image">
                {userPhoto
                  ? (<Media className="img-fluid" src={userPhoto} alt={`${firstName} ${lastName}`} />)
                  : (<FontAwesomeIcon icon={faUser} className="user-icon" />)
                }
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={6} md={4} className="stats-wrapper">
                  <img
                    src={cholesterolIcon}
                    alt="cholesterol icon"
                    className="health-icon"
                  />
                  <span className="health_stats">
                    Risk Factor: <br /> {riskFactor}
                  </span>
                </Col>
                <Col xs={6} md={4} className="stats-wrapper">
                  <img
                    src={pressureIcon}
                    alt="bp icon"
                    className="health-icon"
                  />
                  <span className="health_stats">
                    Blood Pressure: <br />
                    {bpSystolic}
                  </span>
                </Col>
                <Col xs={6} md={4} className="stats-wrapper">
                  <img
                    src={glucoseIcon}
                    alt="glucose icon"
                    className="health-icon"
                  />
                  <span className="health_stats">
                    Blood Sugar: <br />
                    80 mg/dL
                  </span>
                </Col>
                <Col xs={6} md={4} className="stats-wrapper">
                  <img src={tapeIcon} alt="tape icon" className="health-icon" />
                  <span className="health_stats">
                    Waist: <br /> {waist}''
                  </span>
                </Col>
                <Col xs={6} md={4} className="stats-wrapper">
                  <img src={dietIcon} alt="diet icon" className="health-icon" />
                  <span className="health_stats">
                    Diet: <br /> {dietLabel}
                  </span>
                </Col>
                <Col xs={6} md={4} className="stats-wrapper">
                  <img
                    src={restrictionIcon}
                    alt="restriction icon"
                    className="health-icon"
                  />
                  <span className="health_stats">
                    Restriction: <br />
                    {dietRestriction && dietRestriction.length > 0
                      ? dietRestriction
                      : "None"}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="tabGroup">
          <Link
            to={{
              pathname: `/user/${userId}`,
              params: { id: userId }
            }}
          >
            <Button
              id="profileTab"
              style={{ backgroundColor: this.profileTabColor() }}
            >
              <p
                style={{
                  color: this.savedTabColor(),
                  margin: "0.25rem 0",
                  fontSize: ".75rem",
                  fontWeight: "bold"
                }}
              >
                <img src={searchIcon} alt="search icon" className="tab-icon" />
                New Search{" "}
              </p>
            </Button>
          </Link>

          <Link
            to={{
              pathname: `/savedrecipes/${userId}`,
              params: { id: userId }
            }}
          >
            <Button
              id="savedTab"
              style={{ backgroundColor: this.savedTabColor() }}
            >
              <p
                style={{
                  color: this.profileTabColor(),
                  margin: "0.25rem 0",
                  fontSize: ".75rem",
                  fontWeight: "bold"
                }}
              >
                <img src={recipeIcon} alt="search icon" className="tab-icon" />{" "}
                Saved Recipes
              </p>
            </Button>
          </Link>
        </div>
      </Jumbotron>
    );
  }
}

export default UserJumbotron;
