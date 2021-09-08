import { render, screen, cleanup } from '@testing-library/react'
import expect from 'expect';
import SuccessContainer from "./SuccessContainer";

afterEach(() => {
    cleanup()
})

test('test rendering', () => {
    localStorage.setItem('formFirstName', 'Wes')
    render(<SuccessContainer />)
    const container = screen.getByTestId('test-1')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('Wes, you have submitted the form successfully.')
})