import React from 'react';
import { FormGroup, FormControl, Button } from 'reactstrap';
import './RecipeCard.css';

const RecipeCard = props => (
  <div className='flip-card' key={props.recipe_id}>
    <div className='mainflip'>
      <div className='flip-card-front'>
        <div className='card'>
          <div className='card text-center'>
            <img className=' img-fluid' src={props.recipe_img} alt='card'></img>
            <p className='card-title'>{props.recipe_name}</p>
          </div>
        </div>
      </div>
      <div className='flip-card-back'>
        <div className='card'>
          <div className='card text-center'>
            <p className='card-title'>NOTES for {props.recipe_name}</p>
            <div>{props.notes}</div>
            <FormGroup>
              <FormControl
                type='text'
                name='note_text'
                id={props.recipe_id}
                value={props.note_text}
                onChange={props.onChange}
                placeholder='Type note here'
              />
            </FormGroup>
            <a>
              <i class='fa fa-plus'>
                <Button
                  className='save'
                  id={props.recipe_id}
                  onClick={props.saveNote}
                >
                  POOOOOOOOOOOOOOOOOOOP
                </Button>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecipeCard;
