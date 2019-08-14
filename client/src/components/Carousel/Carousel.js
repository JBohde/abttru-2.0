import React from 'react';
import { Button, Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import { RingLoader } from 'react-spinners';
import PiePlot from '../Graphs/PiePlot';
import Input from '../Input/Input';
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
    this.setState({
      [name]: value,
    });
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
        `https://api.edamam.com/search?q=${
          this.state.name
        }&app_id=${appId}&app_key=${appKey}&calories=591-722&from=${firstIndex}&Diet=${
          this.props.diet_label
        }
        &Health=${this.props.health_label}`,
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

  saveRecipe = event => {
    const target = event.target;
    const id = this.props.userId;
    const recipeObj = {
      userId: id,
      name: target.getAttribute('name'),
      image: target.getAttribute('img'),
      link: target.getAttribute('link'),
      uri: target.id,
    };
    axios
      .post(`/api/abttru/recipes/${id}`, recipeObj)
      .catch(err => console.log(err));
  };

  render() {
    const { pathName } = this.props;
    let searchedRecipeCard;
    if (pathName === '/guest') {
      searchedRecipeCard = this.state.data.map((data, index) => {
        const {
          recipe: { url, image, label },
        } = data;
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={url}
          >
            <img
              src={image}
              width={250}
              height={250}
              alt="recipeImage"
              id="pic"
            />
            <div id="recipe-info">
              <h4 id="label">{label}</h4>
              <Button className="get-recipe" href={url} target="_blank">
                GET RECIPE
              </Button>
            </div>
          </CarouselItem>
        );
      });
    } else {
      searchedRecipeCard = this.state.data.map((data, index) => {
        const {
          recipe: { url, uri, image, label },
          recipe,
        } = data;
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={url}
          >
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <img
                  src={image}
                  width={250}
                  height={250}
                  alt="recipeImage"
                  id="pic"
                />
                <div id="recipe-info">
                  <h4 id="label">{label}</h4>
                  <Button className="get-recipe" href={url} target="_blank">
                    GET RECIPE
                  </Button>
                  <Button
                    className="btn-primary save-recipe"
                    id={uri}
                    name={label}
                    img={image}
                    link={url}
                    onClick={this.saveRecipe}
                  >
                    SAVE RECIPE
                  </Button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <PiePlot
                  className="pieTry"
                  digestData={recipe.digest}
                  yieldData={recipe.yield}
                />
              </div>
            </div>
          </CarouselItem>
        );
      });
    }

    return (
      <div className="main-content">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-3 col-lg-2" />
          <div className="col-10 col-sm-10 col-md-6 col-lg-8 carousel-div">
            <form onSubmit={this.getRecipes.bind(this)}>
              <Input
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Search ingredients(e.g. chicken)"
              />
              <br />
              <Button
                onClick={this.getRecipes.bind(this)}
                color="primary"
                id="get"
              >
                Get Recipes
              </Button>
            </form>
          </div>
          <div className="col-1 col-sm-1 col-md-3 col-lg-2" />
        </div>

        <div className="row">
          <div className="col-3 col-sm-3 col-md-5 col-lg-5" />
          <div className="col-6 col-sm-6 col-md-2 col-lg-2 sweet-loader">
            <RingLoader
              loading={this.state.loading}
              size={200}
              color={'#EC0B43'}
            />
          </div>
          <div className="col-3 col-sm-3 col-md-5 col-lg-5" />
        </div>
        <div className="row">
          <div className="col-0 col-sm-0 col-md-1 col-lg-2" />
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 recipe-display">
            {this.state.showCarousel ? (
              <Carousel
                className={this.props.className}
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
              >
                {searchedRecipeCard}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={this.previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={this.next}
                />
              </Carousel>
            ) : null}
          </div>

          <div className="col-0 col-sm-0 col-md-1 col-lg-2" />
        </div>
      </div>
    );
  }
}

export default ControlledCarousel;
