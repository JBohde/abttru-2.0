import React from 'react';
import { Button } from 'reactstrap';
import Input from '../../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SavedRecipeCard.css';

const SavedRecipeCard = props => {
  const {
    id,
    image,
    link,
    name,
    flipCard,
    notes,
    saveNote,
    deleteRecipe,
    noteText,
    onChange,
  } = props;
  return (
    <div className="image-flip" key={id}>
      <div className="mainflip">
        <div className="frontside">
          <div className="card">
            <div className="card text-center">
              <img
                className=" img-fluid"
                src={image}
                id="card"
                isflipped="false"
                alt="card"
              />
              <h4 className="card-title">
                <a
                  className="recLink"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>{' '}
              </h4>
            </div>
            <FontAwesomeIcon
              icon="arrow-circle-right"
              size="2x"
              className="arrow-flip"
              onClick={flipCard}
            />
          </div>
        </div>
        <div className="backside">
          <div className="card">
            <div className="card text-center" id="card" isflipped="false">
              <h3 className="card-title">
                <a
                  id="recipe-name"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </h3>
              {notes}
              <form onSubmit={saveNote} id={id}>
                <Input
                  name="noteText"
                  value={noteText}
                  onChange={onChange}
                  placeholder="Add A Note..."
                />
              </form>
              <Button
                id={id}
                className="save-note"
                color="secondary"
                onClick={saveNote}
              >
                ADD NOTE
              </Button>
              <Button className="get-recipe">
                <a
                  id="recipe-link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET RECIPE
                </a>
              </Button>
              <Button
                id={id}
                className="delete-recipe"
                outline
                color="danger"
                onClick={deleteRecipe}
              >
                DELETE RECIPE
              </Button>
            </div>
            <FontAwesomeIcon
              icon="arrow-circle-left"
              size="2x"
              className="arrow-flip"
              onClick={flipCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedRecipeCard;
