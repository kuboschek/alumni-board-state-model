import { AnyEvent, EventType, getTimePoints } from "./events";
import { BoardMembership, State } from "./state";
import * as moment from 'moment';


function reduceEvents(events: AnyEvent[], initial?: State, stopTime?: Date): State {
    let state = initial || {
        pastBoard: [],
        board: [],
        persons: {},
        currentTime: new Date(0)
    }

    events.forEach(event => {
        if(stopTime && state.currentTime > stopTime) {
            return
        }

        switch (event.type) {
            case EventType.TIME:
                state.currentTime = event.now
                const now = moment(state.currentTime)

                // Terms of board members last at most 3 years
                state.board = state.board.filter(({from, person, role}) => {
                    if(now.diff(from, 'years') >= 3) {
                        state.pastBoard.push({
                            from,
                            to: state.currentTime,
                            person,
                            role
                        })

                        return false
                    }

                    return true
                })

                break

            case EventType.PERSON_UPDATE:
                state.persons[event.personID] = event.personData
                break

            case EventType.PERSON_DELETE:
                delete state.persons[event.personID]
                break

            case EventType.APPOINTED:
            case EventType.ELECTED:
                // Add sitting board member to the history books
                let sitting = state.board.find(({ role }) => role === event.role)
                if (sitting) {
                    state.pastBoard.push({
                        ...sitting,
                        to: state.currentTime
                    })
                }

                // Remove sitting board members with same role
                state.board = state.board.filter(({ role }) => role !== event.role)

                // Add new board membership
                state.board.push({
                    from: state.currentTime,
                    person: event.personID,
                    role: event.role
                })

                break

            case EventType.VOTED_OUT:
            case EventType.DECEASED:
                // Add sitting board member to the history books
                let votedOutPerson = state.board.find(({ person }) => person === event.personID)
                if (votedOutPerson) {
                    state.pastBoard.push({
                        ...votedOutPerson,
                        to: state.currentTime
                    })
                }

                // Remove voted out person
                state.board = state.board.filter(({ person }) => person !== event.personID)

                break
        }
    })


    return state
}

export default reduceEvents
export * as views from './views'
export * as reality from './reality'

export { getTimePoints } from './events'
