import React from 'react';
import renderer from 'react-test-renderer';
import CompanyItem from '../CompanyItem';
import CompanySelector from './index';

test('Selector Snapshot Test', () => {
  const formData = {
    name: "Name",
    city: "City",
    state: "State",
    description: "Description"
  }
  const component = renderer.create(
    <CompanySelector>
      <CompanyItem 
        name={formData.name} 
        location={`${formData.city} ${formData.state}`} 
        description={formData.description}
      />
    </CompanySelector>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});