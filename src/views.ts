import { PersonData, PersonID } from "./events";
import { BoardMembership, State,  } from "./state";


export function pastMembersByUser(state: State): Record<PersonID, BoardMembership[]> {
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

/**
 * Gets the basename for an image of a specific image. 
 * If an image is not available, returns undefined. 
 * 
 * The image can be loaded like require(`.../images/people/${basename}.jpg`). 
 * For technical reasons, the require() site *must* be in the image component or 'src' attribute. 
 */
export function getImageBaseName({photo, name}: PersonData): string | undefined {
    if(typeof photo === "undefined" || typeof photo === "string") return photo;
    const parts = name.split(/\s/).filter(p => !p.endsWith("."));
    return parts.map(p => p.replace(/[^\x20-\x7E]+/g, '_')).join('_');
}