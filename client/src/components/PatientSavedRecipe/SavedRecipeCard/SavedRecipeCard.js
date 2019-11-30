import React from 'react';
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SavedRecipeCard.css';

const SavedRecipeCard = props => {
  const {
    id,
    image,
    link,
    name,
    flipCard,
    flipClass,
    notes,
    saveNote,
    noteText,
    onChange,
  } = props;

  return (
    <div className="carousel">
      <div className={flipClass} key={id}>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              className='recipe-image'
              src={image}
              alt='card'
            />
            <div className='recipe-info'>
              <h4 className='recipe-label'>{name}</h4>
            </div>
            <FontAwesomeIcon
              icon='undo'
              size='2x'
              className='arrow-front'
              onClick={flipCard}
            />
          </div>
          <div className='flip-card-back'>
            <h6 className='card-title'>
              <a
                id='recipe-name'
                href={link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {name}
              </a>
            </h6>
            {notes}
            <form onSubmit={saveNote} id={id} className='.card-form'>
              <Input
                name='noteText'
                value={noteText}
                onChange={onChange}
                placeholder='Add A Note...'
              />
            </form>
            <div className='card-button-wrapper'>
              <Button
                id={id}
                className='save-note'
                color='secondary'
                onClick={saveNote}
              >
                ADD NOTE
              </Button>
              <FontAwesomeIcon
                icon='undo'
                size='2x'
                className='arrow-back'
                onClick={flipCard}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedRecipeCard;
