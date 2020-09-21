import React from 'react'

export default function Ticket ({children, ...restProps}) {
    return (
        <div className="ticket-container">
            {children}
        </div>
    )
}

Ticket.Title = function TicketTitle ({children}) {
    return (
        <h2 className="ticket-title">
            {children}
        </h2>
    )
}

Ticket.Info = function TicketInfo ({children}) {
    return (
        <p className="ticket-info">
            {children}
        </p>
    )
}