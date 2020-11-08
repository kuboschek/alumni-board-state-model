import { AnyEvent, Elected, EventType, PersonUpdate, VotedOut } from "./events";

interface Role {
    title: string,
    from: number,
    to: number
}

interface PersonRole {
    title: string,
    from: number,
    to: number,
    persID: string
}

interface OldBoardData {
    name: string,
    roles: Role[]
}

function makePersID(name: string) {
    return name.toLowerCase().split(' ').map(val => val[0]).join('')
}

function extract(oldBoard: OldBoardData[]): AnyEvent[] {
    let out: AnyEvent[] = []
    out.push(...extractNames(oldBoard))

    const flatRoles: PersonRole[] = []

    oldBoard.forEach(({name, roles}) => {
        const persID = makePersID(name)
        roles.forEach((role) => {
            flatRoles.push({
                persID,
                ...role
            })
        })
    })

    const timedEvents = flatRoles.reduce<Record<number, (Elected | VotedOut)[]>>((events, role) => {

        if(!events[role.from]) {
            events[role.from] = []
        }

        if(!events[role.to]) {
            events[role.to] = []
        }
        
        events[role.from].push({
            type: EventType.ELECTED,
            personID: role.persID,
            role: role.title
        })

        events[role.to].push({
            type: EventType.VOTED_OUT,
            personID: role.persID,
        })


        return events
    }, {})

    for (const time in timedEvents) {
        if (Object.prototype.hasOwnProperty.call(timedEvents, time)) {
            const sortedEvents = timedEvents[time].sort((a, b) => { 
                if(a.type == EventType.ELECTED && b.type == EventType.VOTED_OUT) {
                    return -1
                } else if(a.type == EventType.VOTED_OUT && b.type == EventType.ELECTED) {
                    return 1
                }

                return 0
            });

            out.push({
                type: EventType.TIME,
                now: new Date(time)
            })

            sortedEvents.filter(({type}) => type == EventType.ELECTED).forEach((e) => out.push(e))

            // Push the leaving board member events to the end of the year
            out.push({
                type: EventType.TIME,
                now: new Date(parseInt(time), 11, 32)
            })

            sortedEvents.filter(({type}) => type == EventType.VOTED_OUT).forEach((e) => out.push(e))
        }
    }


    return out
}

function extractNames(oldBoard: OldBoardData[]): PersonUpdate[] {
    return oldBoard.map(({name}) => {
        const persID = makePersID(name)
        return {
            type: EventType.PERSON_UPDATE,
            personID: persID,
            personData: {
                name
            }
        }
    })
}

export default extract