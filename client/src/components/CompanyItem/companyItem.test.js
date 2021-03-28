import React from 'react';
import renderer from 'react-test-renderer';
import CompanyItem from './index';

test('Company Item Snapshot Test', () => {
  const formData = {
    name: "Name",
    city: "City",
    state: "State",
    description: "Description"
  }
  const component = renderer.create(
    <CompanyItem 
      name={formData.name} 
      location={`${formData.city} ${formData.state}`} 
      description={formData.description}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});