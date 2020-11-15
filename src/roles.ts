// BoardRole represents a role in the board
export enum BoardRole {
    President = 'president',
    VicePresident = 'vice-president',
    Secretary = 'secretary',
    Treasurer = 'treasurer',

    AssessorEventManagement = 'events',
    AssessorFundraising = 'fundraising',
    AssessorInformationTechnology = 'it',
    AssessorMemberManagement = 'member-management',
    AssessorNetworkDevelopment = 'network-development',
    AssessorPublicRelations = 'pr',
    AssessorSpecialProjects = 'special-projects',
}

const allRoles = [
    BoardRole.President,
    BoardRole.VicePresident,
    BoardRole.Secretary,
    BoardRole.Treasurer,

    BoardRole.AssessorEventManagement,
    BoardRole.AssessorFundraising,
    BoardRole.AssessorInformationTechnology,
    BoardRole.AssessorMemberManagement,
    BoardRole.AssessorNetworkDevelopment,
    BoardRole.AssessorPublicRelations,
    BoardRole.AssessorSpecialProjects,
]

/** Gets an semantically meanigful list of roles on the board */
export function getRoles(): Array<BoardRole> {
    return allRoles.slice(); // slice() to prevent accidental mutation of the array!
}

/** Checks if a role is regular, i.e. not an assessor */
export function isRegular(role: BoardRole): boolean {
    return allRoles.indexOf(role) <= 3
}

/** Checks if a role is an assessor role */
export function isAssessor(role: BoardRole): boolean {
    return allRoles.indexOf(role) >= 4
}
