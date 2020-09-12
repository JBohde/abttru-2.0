import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import UserJumbotron from '../../components/UserJumbotron';
import SearchInput from '../../components/SearchInput';
import Carousel from '../../components/Carousel';
import PiePlot from '../../components/PiePlot';
import Spinner from '../../components/Spinner';

import './User.css';

const appId = process.env.REACT_APP_EDAMAME_APP_ID;
const appKey = process.env.REACT_APP_EDAMAME_APP_KEY;
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.id,
      firstName: '',
      lastName: '',
      userPhoto: '',
      riskFactor: '',
      dietRecommendation: '',
      dietRestriction: '',
      isUserPage: true,
      ingredients: '',
      recipes: [],
      activeIndex: 0,
      isLoading: false,
      showCarousel: false,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    axios
      .get(`/api/abttru/user/${params.id}`)
      .then(res => this.setState(res.data))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getRecipes = e => {
    e.preventDefault();
    this.setState({ showCarousel: false, isLoading: true });
    const firstIndex = Math.floor(Math.random() * 20);
    axios
      .get(
        `https://api.edamam.com/search?q=${this.state.ingredients}&app_id=${appId}&app_key=${appKey}&calories=591-722&from=${firstIndex}&Diet=${this.props.dietLabel}&Health=${this.props.healthLabel}`,
      )
      .then(res => {
        console.log('{{{ res }}}', res.data.hits);
        this.setState({
          recipes: res.data.hits,
          showCarousel: true,
          isLoading: false,
        });
      })
      .catch(err => console.log(err));
  };

  saveRecipe = () => {
    const { activeIndex, recipes } = this.state;
    const { id: userId } = this.props.match.params;
    console.log(recipes[activeIndex]);
    const recipeObj = {
      userId,
      name: recipes[activeIndex].recipe.label,
      image: recipes[activeIndex].recipe.image,
      link: recipes[activeIndex].recipe.url,
      uri: recipes[activeIndex].recipe.uri,
    };
    axios
      .post(`/api/abttru/recipes/${userId}`, recipeObj)
      .catch(err => console.log(err));
  };

  updateActiveIndex = newIndex => {
    this.setState({ activeIndex: newIndex });
  };

  fontAwesomeColor = () =>
    this.state.riskFactor === 'high-cholesterol' ? 'red' : 'black';

  render() {
    const {
      userId,
      userPhoto,
      firstName,
      lastName,
      riskFactor,
      dietRecommendation,
      dietRestriction,
      waist,
      bpSystolic,
      bpDiastolic,
      isUserPage,
      ingredients,
      recipes,
      activeIndex,
      isLoading,
      showCarousel,
    } = this.state;
    const { path: pathName } = this.props.match;
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
        <Container>
          <Row>
            <Col xs={12} md={{ size: 8, offset: 2 }}>
              <SearchInput
                name='ingredients'
                value={ingredients}
                label='Search Ingredients'
                getInfo={this.getRecipes}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row>{isLoading ? <Spinner isLoading={isLoading} /> : null}</Row>
          {showCarousel ? (
            <Row>
              <Col xs={12} md={6} lg={{ size: 4, offset: 2 }}>
                <Carousel
                  slides={recipes}
                  updateActiveIndex={this.updateActiveIndex}
                />
                <div className='search-button-wrapper'>
                  <Button
                    className='get-recipe'
                    href={recipes[activeIndex].recipe.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GET RECIPE
                  </Button>
                  {pathName === '/guest' ? null : (
                    <Button
                      className='btn-primary save-recipe'
                      onClick={this.saveRecipe}
                    >
                      SAVE RECIPE
                    </Button>
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <PiePlot
                  data={recipes}
                  activeIndex={activeIndex}
                  path={pathName}
                />
              </Col>
            </Row>
          ) : null}
        </Container>
      </>
    );
  }
}

User.propTypes = {
  // userId: PropTypes.string.isRequired,
  pathName: PropTypes.string,
  className: PropTypes.string,
};

export default User;
