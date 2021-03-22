import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CreateNewCompany from '../screens/CreateNewCompany/CreateNewCompany';
import TestUtils from 'react-dom/test-utils';

configure({adapter: new Adapter()});

const newCompany = {
    name: "Company ABC",
    city: "Denver",
    state: "CO",
    description: "This company specializes in the alphabet", 
    founded_date: "01/03/2011"
  };

describe('Add New Company Form', () => {
    it('fill out form', () => {

        const wrapper = shallow(
          <CreateNewCompany />
        )

        const companyName = wrapper.find('#company-name')
        const city = wrapper.find('#city')
        const state = wrapper.find('#state')
        const description = wrapper.find('#description')
        const date = wrapper.find('#date')
        const submitButton = wrapper.find('#submit-button')

        companyName.simulate('change', { target: { value: newCompany.name } })
        city.simulate('change', { target: { value: newCompany.city } })
        state.simulate('change', { target: { value: newCompany.state } })
        description.simulate('change', { target: { value: newCompany.description } })
        date.simulate('change', { target: { value: newCompany.founded_date } })
        
        submitButton.simulate('click')
        
      })
  });

  