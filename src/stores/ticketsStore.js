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
                userName: 'Luka Vulicevic',
                date: '22/09/2020 12:44',
                category: 'hr',
                urgency: 'low',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            }, 
            {
                id: 1,
                categoryId: 200,
                title: 'Refund',
                userName: 'Luka Vulicevic',
                date: '22/09/2020 12:44',
                category: 'acct',
                urgency: 'medium',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 1,
                categoryId: 100,
                title: 'Meeting room',
                userName: 'Luka Vulicevic',
                date: '22/09/2020 12:44',
                category: 'hr',
                urgency: 'high',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 1,
                categoryId: 100,
                title: 'New problem',
                userName: 'Luka Vulicevic',
                date: '22/09/2020 12:44',
                category: 'hr',
                urgency: 'medium',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 1,
                categoryId: 200,
                title: 'Refund',
                userName: 'Luka Vulicevic',
                date: '22/09/2020 12:44',
                category: 'acct',
                urgency: 'high',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 1,
                categoryId: 200,
                title: 'Salaries',
                userName: 'Luka Vulicevic',
                date: '22/09/2020 12:44',
                category: 'acct',
                urgency: 'low',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },
            {
                id: 1,
                categoryId: 300,
                title: 'Laptop not working',
                userName: 'Luka Vulicevic',
                date: '22/09/2020 12:44',
                category: 'it',
                urgency: 'high',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue lorem, tempor a lectus vel, laoreet dignissim lacus.'
            },

        ],
        addTicket(ticket){
            this.tickets.push(ticket)
        },
        removeTicket(id){
            this.tickets = this.tickets.filter( ticket => ticket.id !== id)
        }
    }
}