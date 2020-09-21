import React from 'react'
import './styles/form.css'

export default function TicketForm ({children}) {
    return (
        <div className="form-container">
            <form className="ticket-form">
                {children}
            </form>
        </div>
    )
}

TicketForm.Input = function TicketFormInput ({...restProps}) {
    return (
        <input className="ticket-form-input" {...restProps}/>
    )
}

TicketForm.TextArea = function TicketFormTextArea ({...restProps}) {
    return (
        <textarea className="ticket-form-text-area" {...restProps}/>
    )
}

TicketForm.Select = function TicketFormSelect ({children, ...restProps}) {
    return (
        <select 
            className="ticket-form-select" 
            {...restProps}
        >
            {children}
        </select>
    )
}

TicketForm.Submit = function TicketFormSubmit ({children, ...restProps}) {
    return (
        <button 
            className="ticket-form-btn"
            {...restProps}
        > 
            {children} 
        </button>
    )
}