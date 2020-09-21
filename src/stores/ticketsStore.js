export function createTicketsStore(){
    return {
        tickets: [],
        addTicket(ticket){
            this.tickets.push(ticket)
        },
        removeTicket(id){
            this.tickets = this.tickets.filter( ticket => ticket.id !== id)
        }
    }
}