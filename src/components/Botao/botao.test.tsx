import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './botao'

describe('Button component', () => {
  test('renders with the correct label', () => {
    const label = 'Click Me'
    render(<Button label={label} onClick={() => {}} />) 

    
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  test('calls the onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const label = 'Click Me'
    render(<Button label={label} onClick={onClickMock} />)

   
    fireEvent.click(screen.getByText(label))

    
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})