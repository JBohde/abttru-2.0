import React from 'react';
import axios from 'axios';
import RecipeCard from './SavedRecipeCard';
import UserJumbotron from '../UserJumbotron/';
import './PatientSavedRecipe.css';
import PiePlot from '../Graphs/PiePlot';
import { RingLoader } from 'react-spinners';
import { Button } from 'reactstrap';

class PatientSavedRecipe extends React.Component {
  state = {
    data: [],
    userId: this.props.match.params.id,
    recipeId: '',
    name: '',
    password: '',
    userPhoto: '',
    riskFactor: '',
    dietRecommendation: '',
    dietRestriction: '',
    recipes: [],
    recipeData: [],
    index: 0,
    notes: [],
    noteText: '',
    isUserPage: false,
    showResults: true,
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
      showResults: false,
    });
    axios.get(`/api/abttru/user/${this.state.userId}`).then(res => {
      this.setState(res.data);
      this.setState({
        loading: false,
        showResults: true,
      });
      if (res.data.recipes.length < 1) {
        return;
      }
      this.getData();
    });
  }

  getData = () => {
    this.setState({ showResults: false, loading: true });
    let allUri = this.state.recipes.map(recipe => recipe.uri);
    let length = allUri.length;
    if (length === 0) {
      this.setState({
        index: 0,
        showResults: true,
        loading: false,
      });
    } else {
      let randomRecipe = Math.floor(Math.random() * length);
      this.setState({
        index: randomRecipe,
        showResults: true,
        loading: false,
      });
    }

    let recipeUri = allUri[this.state.index];
    let edemamUri = encodeURIComponent(recipeUri);
    axios
      .get(
        `https://api.edamam.com/search?r=${edemamUri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`,
      )
      .then(recipe => {
        this.setState({ recipeData: recipe.data });
      });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeRecipe = e => {
    this.setState({ loading: true, showResults: false });
    const id = e.target.id;
    const uri = encodeURIComponent(id);
    axios
      .get(
        `https://api.edamam.com/search?r=${uri}&app_id=76461587&app_key=b829a690de0595f2fa5b7cb02db4cd99`,
      )
      .then(recipe => {
        const position = this.state.recipes.map(r => r.uri).indexOf(id);
        this.setState({
          recipeData: recipe.data,
          index: position,
          loading: false,
          showResults: true,
        });
      });
  };

  makeNotes = notes =>
    notes.map(note => (
      <div key={note._id} className="notes">
        {note.body}
        <button className="delete-note" id={note._id} onClick={this.deleteNote}>
          x
        </button>
      </div>
    ));

  makeCard = () => {
    const { recipes, index } = this.state;
    const savedCard = recipes.map(recipe => {
      const { saveNote, deleteRecipe, flipCard } = this;
      const { noteText } = this.state;
      const { _id, name, image, link, notes } = recipe;
      return (
        <div key={_id}>
          <RecipeCard
            saveNote={saveNote}
            deleteRecipe={deleteRecipe}
            flipCard={flipCard}
            key={_id}
            image={image}
            name={name}
            link={link}
            id={_id}
            notes={this.makeNotes(notes)}
            noteText={noteText}
            onChange={this.onChange}
          />
        </div>
      );
    });
    return savedCard[index];
  };

  flipCard = () => {
    const card = document.querySelector('#card');
    const cardDiv = document.querySelector('.image-flip');
    const isFlipped = JSON.parse(card.getAttribute('isflipped'));
    if (!isFlipped) {
      card.setAttribute('ispicked', 'true');
    }
    cardDiv.classList.toggle('flip');
    return;
  };

  saveNote = event => {
    event.preventDefault();
    const id = event.target.id;
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
    const id = event.target.id;
    axios.delete(`/api/abttru/recipes/notes/${id}`).then(() => {
      axios
        .get(`/api/abttru/user/${this.props.match.params.id}`)
        .then(res => this.setState(res.data));
    });
  };

  deleteRecipe = event => {
    const id = event.target.id;
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
        <li className="recipe" id={uri} key={_id}>
          <a href={link} title={name} target="_blank" rel="noopener noreferrer">
            <img className="img-responsive pic" src={image} alt="alt" />
          </a>
          <div className="recipe-info">
            <h6 className="recipe_name">{name}</h6>
            <br />
            <Button
              className="recipe-card-button"
              id={uri}
              onClick={this.changeRecipe}
            >
              GET RECIPE CARD
            </Button>
          </div>
        </li>
      );
    });

    const piePlot = this.state.recipeData.map(recipe => (
      <div key={recipe.uri}>
        <PiePlot digestData={recipe.digest} yieldData={recipe.yield} />
      </div>
    ));

    const {
      userId,
      riskFactor,
      dietRecommendation,
      dietRestriction,
      isUserPage,
      userPhoto,
      loading,
      showResults,
    } = this.state;

    return (
      <div>
        <div className="savedPage">
          <div>
            <div>
              <UserJumbotron
                className={'col-md-12'}
                userId={userId}
                riskFactor={riskFactor}
                dietLabel={dietRecommendation}
                healthLabel={dietRestriction}
                isUserPage={isUserPage}
                userPhoto={userPhoto}
              />
              <div className="">
                <div className="row">
                  <div className="col-3 col-sm-3 col-md-5 cold-lg-5" />
                  <div className="col-6 col-sm-6 col-md-2 cold-lg-2 sweet-loader">
                    <RingLoader
                      loading={loading}
                      size={200}
                      color={'#EC0B43'}
                    />
                  </div>
                  <div className="col-3 col-sm-3 col-md-5 cold-lg-5" />
                </div>

                {showResults ? (
                  <div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            RECIPE BOX
                          </button>
                          <ul
                            className="dropdown-menu scrollable-menu"
                            role="menu"
                          >
                            {savedSelect}
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4" />
                    </div>
                    <div className="row">
                      <div className="col-0 col-sm-0 col-md-1 cold-lg-1" />
                      <div className="col-12 col-sm-12 col-md-5 col-lg-5 display">
                        <div className="card-holder">{this.makeCard()}</div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-5 col-lg-5 display">
                        {piePlot}
                      </div>
                      <div className="col-0 col-sm-0 col-md-1 col-lg-1" />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientSavedRecipe;
