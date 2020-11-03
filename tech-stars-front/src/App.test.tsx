import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders skeleton table without data', () => {
  const { container } = render(<App />)

  expect(container).toMatchSnapshot()
})
