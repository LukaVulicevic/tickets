import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useObserver} from 'mobx-react'
import {Form} from '../components'
import {useTicketsStore} from '../stores/TicketsContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EditTicketLayout() {
    const {ticketId} = useParams()
    const ticketsStore = useTicketsStore()
    const currentTicket = ticketsStore.tickets.find( ticket => ticket.id == ticketId)

    const [userName, setUserName] = useState(currentTicket.userName)
    const [title, setTitle] = useState(currentTicket.title)
    const [category, setCategory] = useState(currentTicket.category)
    const [urgency, setUrgency] = useState(currentTicket.urgency)
    const [description, setDescription] = useState(currentTicket.description)

    const handleEdit = (e) => {
        e.preventDefault()

        ticketsStore.removeTicket(ticketId)
        ticketsStore.addTicket({
            id: currentTicket.id,
            userName,
            title,
            date: currentTicket.date,
            category,
            urgency,
            description
        })
        toast.success('Edited', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return useObserver( () => (
        <Form onSubmit={handleEdit}>
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
            <Form.Submit> Edit </Form.Submit>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Form>
    ))
}