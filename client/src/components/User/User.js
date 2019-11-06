import React from 'react';
import axios from 'axios';
import './User.css';
import UserJumbotron from '../UserJumbotron/';
import ControlledCarousel from '../Carousel';

class User extends React.Component {
  state = {
    data: [],
    userId: this.props.match.params.id,
    recipeId: '',
    firstName: '',
    lastName: '',
    password: '',
    userPhoto: '',
    riskFactor: '',
    dietRecommendation: '',
    dietRestriction: '',
    recipes: [],
    passwordHasBeenUpdated: '',
    tabKey: 1,
    isUserPage: true,
  };

  componentDidMount() {
    axios
      .get(`/api/abttru/user/${this.state.userId}`)
      .then(res => {
        this.setState(res.data);
        if (res.data.dietRestriction === '') {
          this.setState({ dietRestriction: 'None' });
        }
      })
      .catch(err => console.log(err));
  }

  fontAwesomeColor = () =>
    this.state.riskFactor === 'high-cholesterol' ? 'red' : 'black';

  render() {
    const {
      userId,
      userPhoto,
      riskFactor,
      dietRecommendation,
      dietRestriction,
      waist,
      bpSystolic,
      bpDiastolic,
      isUserPage,
      firstName,
      lastName,
    } = this.state;
    return (
        <>
          <UserJumbotron
            key={userId}
            userId={userId}
            userPhoto={userPhoto}
            riskFactor={riskFactor}
            waist={waist}
            bpSystolic={bpSystolic}
            bpDiastolic={bpDiastolic}
            dietLabel={dietRecommendation}
            healthLabel={dietRestriction}
            isUserPage={isUserPage}
            firstName={firstName}
            lastName={lastName}
          />

          <ControlledCarousel
            userId={userId}
            captionText={''}
            dietLabel={dietRecommendation}
            healthLabel={dietRestriction}
          />
        </>
    );
  }
}

export default User;
