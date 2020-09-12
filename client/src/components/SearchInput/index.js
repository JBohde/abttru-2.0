import React from 'react';
import {
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

export default function SearchInput({
  name,
  label,
  value,
  getInfo,
  handleInputChange,
}) {
  return (
    <div className='search-wrapper'>
      <Form onSubmit={getInfo}>
        <FormGroup>
          <Label for={name}>{label}</Label>
          <InputGroup>
            <Input
              name={name}
              value={value}
              onChange={handleInputChange}
              placeholder='chicken, broccoli ...'
            />
            <InputGroupAddon addonType='append' onClick={getInfo}>
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
}
