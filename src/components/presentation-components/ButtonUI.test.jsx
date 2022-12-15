import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonUI from './ButtonUI'

describe('Button UI', () => {
    it('button text', () => {
        render(<ButtonUI>Change visible</ButtonUI>)
        expect(screen.getByText(/Change visible/)).toBeInTheDocument()
    })

    it('render with snapshot', () => {
        const {asFragment} = render(<ButtonUI>Change visible</ButtonUI>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('button have class btn-primary', () => {
        render(<ButtonUI>Change visible</ButtonUI>)
        expect(screen.getByText(/Change visible/)).toHaveClass('btn-primary')
    })

})




