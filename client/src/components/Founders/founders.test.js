import React from 'react';
import renderer from 'react-test-renderer';
import Founders from './index';

test('Test Founders snapshot', () => {
  const founderData = [{
    name: "Jessica",
    title: "CEO",
    id: 1
  }];
  const component = renderer.create(
    <Founders founders={founderData} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});