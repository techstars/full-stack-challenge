import React from 'react';
import renderer from 'react-test-renderer';
import FounderCreate from './index';

test('Test Founder Create snapshot', () => {
  const formData = {
    name: "Name",
    city: "City",
    state: "State",
    description: "Description"
  }
  const component = renderer.create(
    <FounderCreate />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});