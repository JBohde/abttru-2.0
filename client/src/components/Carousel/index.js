import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

import './Carousel.css';

class SlidingCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: props.slides,
      activeIndex: 0,
    };
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const { activeIndex, slides } = this.state;
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;

    this.setState(
      { activeIndex: nextIndex },
      this.props.updateActiveIndex(nextIndex),
    );
  };

  previous = () => {
    if (this.animating) return;
    const { activeIndex, slides } = this.state;
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    this.setState(
      { activeIndex: nextIndex },
      this.props.updateActiveIndex(nextIndex),
    );
  };

  renderSlides = () =>
    this.state.slides.map(slide => {
      const {
        recipe: { url, image, label },
      } = slide;
      return (
        <CarouselItem
          key={url}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={image} className='recipe-image' alt='recipeImage' />
          <div className='recipe-info'>
            <h4 className='recipe-label'>{label}</h4>
          </div>
        </CarouselItem>
      );
    });

  render() {
    return (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        {this.renderSlides()}
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
    );
  }
}

export default SlidingCarousel;
