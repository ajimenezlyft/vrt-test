import React from 'react'
import Button from './Button'
import { render, screen } from '@testing-library/react'
import { generateImage } from 'jsdom-screenshot'

describe('Button', () => {
  test('should render a button with children', () => {
    // Arrange
    const children = 'Welcome'
    const props = { id: 'button' }
    // Act
    render(<Button {...props}>{children}</Button>)
    screen.debug()
    // Assert
    const button = screen.getByRole('button', { name: children })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('id', props.id)
  })

  test('screenshot', async () => {
    // Arrange
    const children = 'Welcome'
    const props = { id: 'button' }
    // Act
    render(<Button {...props}>{children}</Button>)
    // Assert
    const image = await generateImage({ debug: true })
    expect(image).toMatchImageSnapshot()
  })
})
