import { BoardRole } from "./roles"

enum EventType {
    ELECTED,
    APPOINTED,
    VOTED_OUT,
    DECEASED,
    PERSON_UPDATE,
    PERSON_DELETE,
    TIME
}

type PersonID = string
type PersonRole = BoardRole

export interface PersonData {
    name: string
    photo?: string | true
    socials?: {
        email?: string
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
        github?: string
    }
    description?: string
}



interface Elected {
    type: EventType.ELECTED
    role: PersonRole
    personID: PersonID
}

interface Appointed {
    type: EventType.APPOINTED
    role: PersonRole
    personID: PersonID
}

interface VotedOut  {
    type: EventType.VOTED_OUT
    personID: PersonID
}

interface Deceased {
    type: EventType.DECEASED
    personID: PersonID
}

interface PersonUpdate  {
    type: EventType.PERSON_UPDATE
    personID: PersonID
    personData: PersonData
}

interface PersonDelete  {
    type: EventType.PERSON_DELETE
    personID: PersonID
}

interface Time {
    type: EventType.TIME,
    now: Date
}


type AnyEvent = Elected | Appointed | VotedOut | Deceased | PersonUpdate | PersonDelete | Time

export {
    AnyEvent,
    Elected,
    Appointed,
    VotedOut,
    Deceased,
    PersonUpdate,
    PersonDelete,
    PersonID,
    PersonRole,
    EventType,
    Time
}

export function getTimePoints(allEvent: AnyEvent[]): Date[] {
    const events = allEvent.filter(({type}) => type === EventType.TIME)
    return (events as Time[]).map(({now}) => now)
}