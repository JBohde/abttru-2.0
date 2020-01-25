import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RingLoader } from 'react-spinners';
import PiePlot from '../Graphs/PiePlot';
import './Carousel.css';
import axios from 'axios';

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      data: [],
      activeIndex: 0,
      showCarousel: false,
      loading: false,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const { activeIndex, data } = this.state;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const { activeIndex, data } = this.state;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  getRecipes(e) {
    e.preventDefault();
    const appId = process.env.REACT_APP_EDAMAME_APP_ID;
    const appKey = process.env.REACT_APP_EDAMAME_APP_KEY;
    this.setState({
      showCarousel: false,
      loading: true,
    });
    let firstIndex = Math.floor(Math.random() * 20);
    axios
      .get(
        `https://api.edamam.com/search?q=${this.state.name}&app_id=${appId}&app_key=${appKey}&calories=591-722&from=${firstIndex}&Diet=${this.props.dietLabel}&Health=${this.props.healthLabel}`,
      )
      .then(res => {
        this.setState({
          data: res.data.hits,
          showCarousel: true,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  saveRecipe = () => {
    const { activeIndex, data } = this.state;
    const { userId } = this.props;
    const recipeObj = {
      userId,
      name: data[activeIndex].recipe.label,
      image: data[activeIndex].recipe.image,
      link: data[activeIndex].recipe.url,
      uri: data[activeIndex].recipe.uri,
    };
    axios
      .post(`/api/abttru/recipes/${userId}`, recipeObj)
      .catch(err => console.log(err));
  };

  render() {
    const { pathName, className } = this.props;
    const { activeIndex, name, data, loading, showCarousel} = this.state;

    const searchedRecipeCard = this.state.data.map(data => {
      const {
        recipe: { url, image, label },
      } = data;
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={url}
        >
          <img src={image} className='recipe-image' alt='recipeImage' />
          <div className='recipe-info'>
            <h4 className='recipe-label'>{label}</h4>
          </div>
        </CarouselItem>
      );
    });

    return (
      <Container>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <div className='search-wrapper'>
              <Form onSubmit={this.getRecipes.bind(this)}>
                <FormGroup>
                  <Label for='name'>Search Ingredients</Label>
                  <InputGroup>
                    <Input
                      name='name'
                      value={name}
                      onChange={this.handleInputChange}
                      placeholder='chicken, broccoli ...'
                    />
                    <InputGroupAddon
                      addonType='append'
                      onClick={this.getRecipes.bind(this)}
                    >
                      <InputGroupText>
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          {loading ? (
            <Col xs={{ size: 6, offset: 3 }}>
              <div className='ring-loader'>
                <RingLoader
                  loading={loading}
                  size={100}
                  color={'#EC0B43'}
                />
              </div>
            </Col>
          ) : null}
        </Row>
        {showCarousel ? (
          <Container>
            <Row>
              <Col xs={12} md={6} lg={{ size: 4, offset: 2 }}>
                <Carousel
                  className={className}
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                  interval={false}
                >
                  {searchedRecipeCard}
                  <CarouselControl
                    direction='prev'
                    directionText='Previous'
                    onClickHandler={this.previous}
                  />
                  <CarouselControl
                    direction='next'
                    directionText='Next'
                    onClickHandler={this.next}
                  />
                </Carousel>
                <div className='search-button-wrapper'>
                  <Button
                    className='get-recipe'
                    href={data[activeIndex].recipe.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GET RECIPE
                  </Button>
                  {pathName === '/guest' ? null : (
                    <Button
                      className='btn-primary save-recipe'
                      id={data[activeIndex].uri}
                      name={data[activeIndex].label}
                      img={data[activeIndex].image}
                      link={data[activeIndex].url}
                      onClick={this.saveRecipe}
                    >
                      SAVE RECIPE
                    </Button>
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <PiePlot
                  data={data}
                  recipeIndex={activeIndex}
                  path={pathName}
                />
              </Col>
            </Row>
          </Container>
        ) : null}
      </Container>
    );
  }
}

export default ControlledCarousel;
