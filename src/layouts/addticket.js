import React, {useState} from 'react'
import {Form} from '../components'
import {useTicketsStore} from '../stores/TicketsContext'
import {nanoid} from 'nanoid'
import moment from 'moment'

export function AddTicketLayout(){

    const [userName, setUserName] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('hr')
    const [categoryId, setCategoryId] = useState(null)
    const [urgency, setUrgency] = useState('low')
    const [description, setDescription] = useState('')

    const ticketsStore = useTicketsStore()

    const handleSubmit = (e) => {
        e.preventDefault()

        

        ticketsStore.addTicket({
            id: nanoid(),
            userName,
            title,
            date: moment().format('Do MMMM YYYY, h:mm:ss a'),
            category,
            urgency,
            description
        })

        setUserName('')
        setTitle('')
        setCategory('hr')
        setUrgency('low')
        setDescription('')
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                type="text"
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Input 
                type="text"
                placeholder="Ticket title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="hr"> 
                    Human Resources 
                </option>
                <option value="acct"> 
                    Accounting 
                </option>
                <option value="it"> 
                    Information Technology 
                </option>
            </Form.Select>
            <Form.Select
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
            </Form.Select>
            <Form.TextArea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Submit> Submit </Form.Submit>
        </Form>
    )
}