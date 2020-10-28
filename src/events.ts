
enum EventType {
    ELECTED,
    APPOINTED,
    VOTED_OUT,
    DECEASED,
    USER_UPDATE,
    USER_DELETE,
    TIME
}

type PersonID = string
type PersonRole = string

interface PersonData {
    name: string
    photoURL: string
    meta?: {
        email?: string
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
        github?: string
    }
    description: string
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
    type: EventType.USER_UPDATE,
    personID: PersonID
    personData: PersonData
}

interface PersonDelete  {
    type: EventType.USER_DELETE,
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
    PersonData,
    PersonID,
    PersonRole,
    EventType,
    Time
}