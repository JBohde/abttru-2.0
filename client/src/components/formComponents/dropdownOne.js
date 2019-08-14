import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import './Dropdown.css';

class ObjectArrayExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: { value: 'two', label: 'Two' },
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option });
  }

  render() {
    const {
      toggleClassName,
      togglePlaholderClassName,
      toggleMenuClassName,
      toggleOptionsClassName,
    } = this.state;

    const options = [
      { value: 'one', label: 'One' },
      {
        value: 'two',
        label: 'Two',
        className: toggleOptionsClassName && 'my-custom-class',
      },
      {
        type: 'group',
        name: 'group1',
        items: [
          {
            value: 'three',
            label: 'Three',
            className: toggleOptionsClassName && 'my-custom-class',
          },
          { value: 'four', label: 'Four' },
        ],
      },
      {
        type: 'group',
        name: 'group2',
        items: [
          { value: 'five', label: 'Five' },
          { value: 'six', label: 'Six' },
        ],
      },
    ];

    const defaultOption = this.state.selected;
    const placeHolderValue =
      typeof this.state.selected === 'string'
        ? this.state.selected
        : this.state.selected.label;

    return (
      <section>
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
          className={toggleClassName ? 'my-custom-class' : ''}
          placeholderClassName={
            togglePlaholderClassName ? 'my-custom-class' : ''
          }
          menuClassName={toggleMenuClassName ? 'my-custom-class' : ''}
        />
      </section>
    );
  }
}

export default ObjectArrayExample;
