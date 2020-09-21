import React, {createContext, useContext} from 'react'
import { createTicketsStore } from './ticketsStore'
import {useLocalStore} from 'mobx-react'

const TicketsContext = createContext(null)

export function TicketsProvider ({children}) {
    const ticketsStore = useLocalStore(createTicketsStore)

    return (
        <TicketsContext.Provider value={ticketsStore}>
            {children}
        </TicketsContext.Provider>
    )
}

export const useTicketsStore = () => useContext(TicketsContext)