export function createTicketsStore(){
    return {
        categories: [
            {id: 100, name: 'Human Resources', abrv: 'hr'},
            {id: 200, name: 'Accounting', abrv: 'acct'},
            {id: 300, name: 'Information Technology', abrv: 'it'}
        ],
        tickets: [
            {
                id: 1,
                categoryId: 100,
                title: 'Random text 1',
                userName: 'John',
                date: '22/09/2020',
                category: 'hr',
                urgency: 'low',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            }, 
            {
                id: 2,
                categoryId: 200,
                title: 'Refund',
                userName: 'Luka',
                date: '23/09/2020',
                category: 'acct',
                urgency: 'medium',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 3,
                categoryId: 100,
                title: 'Meeting room',
                userName: 'Mario',
                date: '24/09/2020',
                category: 'hr',
                urgency: 'high',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 4,
                categoryId: 100,
                title: 'New problem',
                userName: 'Jim',
                date: '24/09/2020',
                category: 'hr',
                urgency: 'medium',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 5,
                categoryId: 200,
                title: 'Refund',
                userName: 'Jane Doe',
                date: '12/09/2020',
                category: 'acct',
                urgency: 'high',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 6,
                categoryId: 200,
                title: 'Salaries',
                userName: 'John Doe',
                date: '14/09/2020',
                category: 'acct',
                urgency: 'low',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 7,
                categoryId: 300,
                title: 'Laptop not working',
                userName: 'Luka',
                date: '01/09/2020',
                category: 'it',
                urgency: 'high',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },

        ],
        addTicket(ticket){
            this.tickets.unshift(ticket)
        },
        removeTicket(id){
            this.tickets = this.tickets.filter( ticket => ticket.id !== id)
        }
    }
}