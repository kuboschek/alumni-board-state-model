import { PersonID } from "./events";
import { BoardMembership, State } from "./state";


function pastMembersByUser(state: State): Record<PersonID, BoardMembership[]> {
    let ret = state.pastBoard.reduce((obj, item) => {

        let list = obj[item.person]
        if(!list) {
            obj[item.person] = []
        }

        obj[item.person].push(item)

        return obj
    }, {} as Record<PersonID, BoardMembership[]>)

    return ret
}

export { pastMembersByUser }