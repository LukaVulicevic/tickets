import React, {useState} from 'react'
import {TicketForm} from '../components'

export function AddTicketLayout(){

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [urgency, setUrgency] = useState('low')
    const [description, setDescription] = useState('')

    return (
        <TicketForm>
            <TicketForm.Input 
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TicketForm.Input 
                type="text"
                placeholder="Ticket title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TicketForm.Select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
            >
                <option value="low"> 
                    Low 
                </option>
                <option value="medium"> 
                    Medium 
                </option>
                <option value="high"> 
                    High 
                </option>
            </TicketForm.Select>
            <TicketForm.TextArea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TicketForm.Submit> Submit </TicketForm.Submit>
        </TicketForm>
    )
}