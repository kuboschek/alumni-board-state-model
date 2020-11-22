import { PersonID, PersonData, PersonRole } from "./events"

export interface BoardMembership {
    person: PersonID
    from: Date
    to?: Date
    role: PersonRole
}

export interface State {
    persons: Record<PersonID, PersonData>
    board: BoardMembership[]
    pastBoard: BoardMembership[]
    currentTime: Date
}
