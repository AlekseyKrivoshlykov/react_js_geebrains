import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import profileReducer from './profileReducer'
import { initialState } from '../initialState'
import { toggleProfile } from './actions'

describe('profileReducer test', () => {
    it('returns correct state after toggleProfile action', () => {
        const profileStore = profileReducer(initialState, toggleProfile({type: 'visible'}))
        expect(profileStore).toBeFalsy()
    })

})
