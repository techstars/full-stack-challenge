import React from 'react';
import renderer from 'react-test-renderer';
import CompanyCreate from './index';

test('Company Create Snapshot Test', () => {
  const formData = {
    name: "Name",
    city: "City",
    state: "State",
    description: "Description"
  }
  const component = renderer.create(
    <CompanyCreate formModelData={formData} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});