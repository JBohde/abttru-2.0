import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import avatar from './avatar.jpg';
import cholesterolIcon from './cholesterol.png';
import glucoseIcon from './glucometer.png';
import restrictionIcon from './icons8-no-entry-512.png';
import pressureIcon from './pressure.png';
import recipeIcon from './recipe.png';
import tapeIcon from './tape.png';
import dietIcon from './diet.png';
import searchIcon from './search.png';
import './UserJumbotron.css';

class UserJumbotron extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {
      userId,
      riskFactor,
      dietLabel,
      healthLabel,
      isUserPage,
    } = this.props;

    this.state = {
      userId: userId,
      riskFactor: riskFactor,
      dietRecommendation: dietLabel,
      dietRestriction: healthLabel,
      isUserPage: isUserPage,
      savedTab: '',
      profileTab: '',
    };
  }

  fontAwesomeColor = () =>
    this.props.riskFactor === 'high-cholesterol' ? 'red' : 'black';

  profileTabColor = () => (this.props.isUserPage ? '#2C3E50' : '#F3F0DD');

  savedTabColor = () => (this.props.isUserPage ? '#F3F0DD' : '#2C3E50');

  render() {
    const { userId, riskFactor, dietLabel, dietRestriction } = this.props;
    let { userPhoto } = this.props;
    if (userPhoto === '') { userPhoto = avatar }
    return (
      <Jumbotron className="jumbo">
        <div className="row patient-profile">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 prof">
            <img id="user_photo" src={userPhoto} alt="user_photo" />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
              <img
                src={cholesterolIcon}
                alt="cholesterol icon"
                className="health-icon"
              />
              <span className="health_stats"> {riskFactor}</span>
            </div>
            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
              <img src={pressureIcon} alt="bp icon" className="health-icon" />
              <span className="health_stats"> Normal</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
              <img
                src={glucoseIcon}
                alt="glucose icon"
                className="health-icon"
              />
              <span className="health_stats"> Normal</span>
            </div>
            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
              <img src={tapeIcon} alt="tape icon" className="health-icon" />
              <span className="health_stats"> Normal</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
              <img src={dietIcon} alt="diet icon" className="health-icon" />
              <span className="health_stats">{dietLabel}</span>
            </div>
            <div className="col-6 col-sm-6 col-md-12 col-lg-12 stats">
              <img
                src={restrictionIcon}
                alt="restriction icon"
                className="health-icon"
              />
              <span className="health_stats">
                {dietRestriction && dietRestriction.length > 0
                  ? dietRestriction
                  : 'None'}
              </span>
            </div>
          </div>
        </div>
        <div className="row search-saved">
          <div className="col-0 col-md-0 col-lg-1 col-1 " />
          <div className="col-12 col-md-12 col-lg-10 col-10 tabGroup">
            <Link
              to={{
                pathname: `/user/${userId}`,
                params: { id: userId },
              }}
            >
              <button
                id="profileTab"
                style={{ backgroundColor: this.profileTabColor() }}
              >
                <p style={{ color: this.savedTabColor() }} id="tabs">
                  <img
                    src={searchIcon}
                    alt="search icon"
                    className="tab-icon"
                  />
                  New Search{' '}
                </p>
              </button>
            </Link>

            <Link
              to={{
                pathname: `/savedrecipes/${userId}`,
                params: { id: userId },
              }}
            >
              <button
                id="savedTab"
                style={{ backgroundColor: this.savedTabColor() }}
              >
                <p style={{ color: this.profileTabColor() }} id="tabs">
                  <img
                    src={recipeIcon}
                    alt="search icon"
                    className="tab-icon"
                  />{' '}
                  Saved Recipes
                </p>
              </button>
            </Link>
          </div>
          <div className="col-0 col-md-0 col-lg-1 col-sm-1" />
        </div>
      </Jumbotron>
    );
  }
}

export default UserJumbotron;
