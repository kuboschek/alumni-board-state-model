import { BoardRole } from "./roles"

export enum EventType {
    ELECTED,
    APPOINTED,
    VOTED_OUT,
    DECEASED,
    PERSON_UPDATE,
    PERSON_DELETE,
    TIME
}

export type PersonID = string
export type PersonRole = BoardRole

interface PersonData {
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



export interface Elected {
    type: EventType.ELECTED
    role: PersonRole
    personID: PersonID
}

export interface Appointed {
    type: EventType.APPOINTED
    role: PersonRole
    personID: PersonID
}

export interface VotedOut  {
    type: EventType.VOTED_OUT
    personID: PersonID
}

export interface Deceased {
    type: EventType.DECEASED
    personID: PersonID
}

export interface PersonUpdate  {
    type: EventType.PERSON_UPDATE
    personID: PersonID
    personData: PersonData
}

export interface PersonDelete  {
    type: EventType.PERSON_DELETE
    personID: PersonID
}

export interface Time {
    type: EventType.TIME,
    now: Date
}


export type AnyEvent = Elected | Appointed | VotedOut | Deceased | PersonUpdate | PersonDelete | Time

export function getTimePoints(allEvent: AnyEvent[]): Date[] {
    const events = allEvent.filter(({type}) => type === EventType.TIME)
    return (events as Time[]).map(({now}) => now)
}