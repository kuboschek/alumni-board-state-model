import { PersonID, PersonData, PersonRole } from "./events"

interface BoardMembership {
    person: PersonID
    from: Date
    to: Date
    role: PersonRole
}

interface State {
    persons: Record<PersonID, PersonData>
    currentBoardMembers: Record<PersonID, BoardMembership>
    allBoardMembers: Record<PersonID, BoardMembership[]>
}