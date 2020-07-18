// import React from 'react';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { expect } from 'chai';
// import Carousel from './index';

// window.URL.createObjectURL = () => {};
// window.addEventListener('error', e => {
//   // I want to silence all errors and know what I'm doing
//   e.preventDefault();
// });
// configure({ adapter: new Adapter() });

// describe('<Carousel />', () => {
//   describe('when an ingredient is provided', () => {
//     it('searches for provided ingredient on submit', () => {
//       const wrapper = shallow(<Carousel />);
//       wrapper.setState({
//         name: 'chicken',
//       });
//       const link = wrapper.find('form');
//       link.simulate('submit', {
//         preventDefault: () => {
//         }
//       });
//       search();
//       expect(search).to.have.been.calledOnce;
//     });
//   });
// });
