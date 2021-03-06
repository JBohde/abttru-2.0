import React from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import UserJumbotron from '../../../components/UserJumbotron';
import './SavedRecipes.css';
import PiePlot from '../../../components/PiePlot';
import { RingLoader } from 'react-spinners';
import { Container, Col, Row, Button } from 'reactstrap';

class SavedRecipes extends React.Component {
  state = {
    userId: this.props.match.params.id,
    recipeId: '',
    firstName: '',
    lastName: '',
    userPhoto: '',
    riskFactor: '',
    dietRecommendation: '',
    dietRestriction: '',
    recipes: [],
    recipeData: [],
    index: 0,
    activeIndex: 0,
    notes: [],
    noteText: '',
    isUserPage: false,
    showResults: false,
    loading: true,
    isFlipped: false,
    flipClass: '',
  };

  componentDidMount() {
    axios.get(`/api/abttru/user/${this.state.userId}`).then(res => {
      this.setState(res.data);
      return res.data.recipes.length < 1 ? null : this.getData();
    });
  }

  getData = () => {
    this.setState({ showResults: false, loading: true });
    const allUri = this.state.recipes.map(recipe => recipe.uri);
    const { length } = allUri;
    if (length === 0) {
      this.setState({ index: 0 });
    } else {
      const randomRecipe = Math.floor(Math.random() * length);
      this.setState({ index: randomRecipe });
    }
    const recipeUri = allUri[this.state.index];
    const edemamUri = encodeURIComponent(recipeUri);
    axios
      .get(
        `https://api.edamam.com/search?r=${edemamUri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`,
      )
      .then(result => {
        const recipe = result.data[0];
        const formattedRecipe = [{ recipe }];
        this.setState({
          recipeData: formattedRecipe,
          loading: false,
          showResults: true,
        });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeRecipe = event => {
    this.setState({ loading: true, showResults: false });
    const { id } = event.target;
    const uri = encodeURIComponent(id);
    axios
      .get(
        `https://api.edamam.com/search?r=${uri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`,
      )
      .then(result => {
        const position = this.state.recipes.map(r => r.uri).indexOf(id);
        const recipe = result.data[0];
        const formattedRecipe = [{ recipe }];
        this.setState({
          recipeData: formattedRecipe,
          index: position,
          loading: false,
          showResults: true,
        });
      });
  };

  makeCard = () => {
    const { recipes, isFlipped, index, noteText } = this.state;
    const savedCard = recipes.map(recipe => {
      const { saveNote, flipCard } = this;
      const { _id, name, image, link, notes } = recipe;
      return (
        <RecipeCard
          saveNote={saveNote}
          isFlipped={isFlipped}
          flipCard={flipCard}
          image={image}
          name={name}
          link={link}
          id={_id}
          notes={this.makeNotes(notes)}
          noteText={noteText}
          onChange={this.onChange}
        />
      );
    });
    return savedCard[index];
  };

  flipCard = () => {
    const { isFlipped } = this.state;
    this.setState({ isFlipped: !isFlipped });
  };

  makeNotes = notes =>
    notes.map(note => (
      <div key={note._id} className='notes'>
        {note.body}
        <button className='delete-note' id={note._id} onClick={this.deleteNote}>
          x
        </button>
      </div>
    ));

  saveNote = event => {
    event.preventDefault();
    const { id } = event.target;
    const noteObj = { recipeId: id, body: this.state.noteText };
    axios
      .post(`/api/abttru/recipes/notes/${id}`, noteObj)
      .then(() => this.setState({ noteText: '' }))
      .then(() => {
        axios
          .get(`/api/abttru/user/${this.props.match.params.id}`)
          .then(res => this.setState(res.data));
      });
  };

  deleteNote = event => {
    const { id } = event.target;
    axios.delete(`/api/abttru/recipes/notes/${id}`).then(() => {
      axios
        .get(`/api/abttru/user/${this.props.match.params.id}`)
        .then(res => this.setState(res.data));
    });
  };

  deleteRecipe = event => {
    const { id } = event.target;
    axios.delete(`/api/abttru/recipes/${id}`).then(() => {
      axios.get(`/api/abttru/user/${this.props.match.params.id}`).then(res => {
        this.setState(res.data);
        this.getData();
      });
    });
  };

  render() {
    const savedSelect = this.state.recipes.map(recipe => {
      const { _id, uri, link, name, image } = recipe;
      return (
        <li className='recipe' id={uri} key={_id}>
          <div className='recipe-wrapper'>
            <a
              href={link}
              title={name}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-responsive patient-photo'
                src={image}
                alt='alt'
              />
            </a>
            <div className='recipe-card-info'>
              <h6 className='recipe-name'>{name}</h6>
              <Button
                className='recipe-card-button'
                id={uri}
                onClick={this.changeRecipe}
              >
                GET RECIPE CARD
              </Button>
            </div>
          </div>
        </li>
      );
    });

    const {
      userId,
      riskFactor,
      bpSystolic,
      bpDiastolic,
      dietRecommendation,
      dietRestriction,
      waist,
      isUserPage,
      userPhoto,
      loading,
      showResults,
      recipes,
      index,
    } = this.state;

    return (
      <div className='savedPage'>
        <UserJumbotron
          className={'col-md-12'}
          userId={userId}
          riskFactor={riskFactor}
          dietLabel={dietRecommendation}
          bpSystolic={bpSystolic}
          bpDiastolic={bpDiastolic}
          healthLabel={dietRestriction}
          waist={waist}
          isUserPage={isUserPage}
          userPhoto={userPhoto}
        />
        <Row>
          {loading ? (
            <Col xs={{ size: 6, offset: 3 }}>
              <div className='ring-loader'>
                <RingLoader loading={loading} size={100} color={'#E91547'} />
              </div>
            </Col>
          ) : null}
        </Row>
        {showResults ? (
          <>
            <Container>
              <Row>
                <Col xs={12} md={{ size: 8, offset: 2 }}>
                  <div className='search-wrapper'>
                    <div className='dropdown'>
                      <Button
                        className='btn btn-secondary dropdown-toggle'
                        type='button'
                        id='dropdownMenuButton'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        RECIPE BOX
                      </Button>
                      <ul className='dropdown-menu scrollable-menu' role='menu'>
                        {savedSelect}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} lg={{ size: 4, offset: 2 }}>
                  {this.makeCard()}
                  <div className='search-button-wrapper'>
                    <Button
                      className='get-recipe'
                      href={recipes[0].link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      GET RECIPE
                    </Button>
                    <Button
                      id={recipes[index]._id}
                      className='delete-saved-recipe'
                      outline
                      color='danger'
                      onClick={this.deleteRecipe}
                    >
                      DELETE RECIPE
                    </Button>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <PiePlot
                    data={this.state.recipeData}
                    activeIndex={this.state.activeIndex}
                  />
                </Col>
              </Row>
            </Container>
          </>
        ) : null}
      </div>
    );
  }
}

export default SavedRecipes;
