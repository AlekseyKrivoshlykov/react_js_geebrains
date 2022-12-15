import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Chats } from './Chats'

describe('Chats', () => {
    it('render', () => {
        render(<Chats>Список чатов:</Chats>)
        expect(screen.getByText(/Список чатов:/)).toBeInTheDocument()
    })

})




