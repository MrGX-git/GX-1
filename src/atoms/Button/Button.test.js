
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe ('<Button />', ()=> {
  it('should render using default props', ()=>{
      const defaultProps = {
          className: 'default-class',
          text: 'text',
          type: 'button', 
      }
    render(<Button {...defaultProps} />)
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
    expect(screen.getByTestId('buttonElement')).toHaveAttribute('type', defaultProps.type)
  })

  it('should execute onclick function', ()=>{
      const defaultProps = {
          className: 'default-class',
          text: 'text',
          type: 'button',
          onClick: jest.fn()
      }
    render(<Button {...defaultProps} />)
    fireEvent.click(screen.getByTestId('buttonElement'))

    expect(defaultProps.onClick).toBeCalledTimes(1)
  })
})