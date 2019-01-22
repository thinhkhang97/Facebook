import React from 'react';
import Renderer from 'react-test-renderer';
import Button from '../Button';

test('Render button correctly', () => {
  const testButton = Renderer.create(<Button />).toJSON();
  expect(testButton).toMatchSnapshot();
});
