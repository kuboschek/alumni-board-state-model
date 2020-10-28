import { PersonID, PersonData, PersonRole } from "./events"

interface BoardMembership {
    person: PersonID
    from: Date
    to?: Date
    role: PersonRole
}

interface State {
    persons: Record<PersonID, PersonData>
    board: BoardMembership[]
    pastBoard: BoardMembership[]
    currentTime: Date
}


export { State, BoardMembership }