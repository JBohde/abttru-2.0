import React from 'react';
import Moment from 'moment';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const StepTwo = props => {
  const {
    pathName,
    weight,
    waist,
    dob,
    sex,
    heightFoot,
    heightInch,
    onChange,
  } = props;

  return (
    <div className='step'>
      <Form>
        <FormGroup>
          <Label for='dob'>Date of Birth</Label>
          <Input
            type='date'
            name='dob'
            placeholder='MM DD YYYY'
            value={Moment(dob).format('YYYY-MM-DD')}
            onChange={onChange}
            disabled={pathName === '/edit/:id'}
          />
        </FormGroup>
        <FormGroup>
          <Label for='sex'>Sex</Label>
          <Input
            type='select'
            className='custom-select'
            value={sex}
            name='sex'
            onChange={onChange}
            disabled={pathName === '/edit/:id'}
          >
            <option value='' disabled />
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </Input>
        </FormGroup>
        <div className='input-group'>
          <FormGroup>
            <Label for='heightFoot'>Height</Label>
            <Input
              type='select'
              className='custom-select'
              name='heightFoot'
              placeholder='Height'
              value={heightFoot}
              onChange={onChange}
              disabled={pathName === '/edit/:id'}
            >
              <option value='3'>3'</option>
              <option value='4'>4'</option>
              <option value='5'>5'</option>
              <option value='6'>6'</option>
              <option value='7'>7'</option>
            </Input>
          </FormGroup>
          &nbsp;
          <FormGroup>
            <Label for='heightInch'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
            <Input
              type='select'
              className='custom-select'
              name='heightInch'
              placeholder='Height'
              value={heightInch}
              onChange={onChange}
              disabled={pathName === '/edit/:id'}
            >
              <option value='0'>0"</option>
              <option value='1'>1"</option>
              <option value='2'>2"</option>
              <option value='3'>3"</option>
              <option value='4'>4"</option>
              <option value='5'>5"</option>
              <option value='6'>6"</option>
              <option value='7'>7"</option>
              <option value='8'>8"</option>
              <option value='9'>9"</option>
              <option value='10'>10"</option>
              <option value='11'>11"</option>
            </Input>
          </FormGroup>
        </div>
        <FormGroup>
          <Label for='weight'>Weight</Label>
          <Input
            type='text'
            name='weight'
            placeholder='Weight (lbs)'
            value={weight}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='waist'>Waist Measurement</Label>
          <Input
            type='select'
            className='custom-select'
            name='waist'
            placeholder='Waist Measurement'
            value={waist}
            onChange={onChange}
          >
            <option value='24'>24"</option>
            <option value='25'>25"</option>
            <option value='26'>26"</option>
            <option value='27'>27"</option>
            <option value='28'>28"</option>
            <option value='29'>29"</option>
            <option value='30'>30"</option>
            <option value='31'>31"</option>
            <option value='32'>32"</option>
            <option value='33'>33"</option>
            <option value='34'>34"</option>
            <option value='35'>35"</option>
            <option value='36'>36"</option>
            <option value='37'>37"</option>
            <option value='38'>38"</option>
            <option value='39'>39"</option>
            <option value='40'>40"</option>
            <option value='41'>41"</option>
            <option value='42'>42"</option>
            <option value='43'>43"</option>
            <option value='44'>44"</option>
            <option value='45'>45"</option>
            <option value='46'>46"</option>
            <option value='47'>47"</option>
            <option value='48'>48"</option>
            <option value='49'>49"</option>
            <option value='50'>50"</option>
            <option value='51'>50" +</option>
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
};
export default StepTwo;
