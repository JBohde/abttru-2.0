import React from "react";
import { Button, Carousel, Row, Col } from "react-bootstrap";
import PiePlot from "../Graphs/PiePlot";
import axios from "axios";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      data: [],
      index: 0,
      direction: null,
      user_id: "5aeccb14e21ebe39bce2f568",
      showCarousel: false
    };
  }

  getRecipes() {
    axios.get("https://api.edamam.com/search?q=potatoes&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99&calories=591-722&Diet=&Health=")
      .then(res => {
        console.log(res);
        console.log(res.data.hits);
        for (var i = 0; i < res.data.hits.length; i++) {
          this.setState({
            data: res.data.hits,
            showCarousel: true

          })
        }
      })
      .catch(err => console.log(err));
  }

  saveRecipe = (event) => {
    const target = event.target;
    const id = this.state.user_id;
    const recipeObj = {
      user_id: id,
      recipe_name: target.getAttribute("name"),
      recipe_img: target.getAttribute("img"),
      recipe_link: target.getAttribute("link"),
      recipe_uri: target.id
    }
    console.log(recipeObj);
    axios.post(`/api/abttru/recipes/${id}`, recipeObj)
      .then(res => { console.log(res); })
      .catch(err => console.log(err));
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }



  render() {
    const { index, direction } = this.state;

    const searchedRecipeCard = this.state.data.map((data, index) =>
      <div>
        <Carousel.Item>
          <Row>
            <Col md={1}></Col>
            <Col xs={6} md={4}>
              <img width={400} height={400} alt="recipeImage" src={data.recipe.image} />
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <PiePlot
                digestData={this.state.data[index].recipe.digest}
                yieldData={this.state.data[index].recipe.yield}
              />
            </Col>
          </Row>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <h1><a href={data.recipe.url} target="_blank">Tap HERE for the recipe</a></h1>
            <Button className="save" id={data.recipe.uri} name={data.recipe.label} img={data.recipe.image} link={data.recipe.url} onClick={this.saveRecipe}>SAVE RECIPE</Button>
          </Carousel.Caption>
        </Carousel.Item>

      </div>
    )


    return (
      <div className="container">
        <Button onClick={this.getRecipes.bind(this)} color="primary">Get Recipes</Button>
        {this.state.showCarousel ? (
          <div>

            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >
              <Carousel.Item>{searchedRecipeCard[0]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[1]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[2]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[3]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[4]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[5]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[6]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[7]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[8]}</Carousel.Item>
              <Carousel.Item>{searchedRecipeCard[9]}</Carousel.Item>
            </Carousel>
          </div>)
          : null}


      </div>
    );

  }
}

export default ControlledCarousel;