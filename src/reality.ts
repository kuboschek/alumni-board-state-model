import { AnyEvent, EventType, PersonUpdate, PersonDelete } from "./events";

/*
    Everything that there is, implies everything else
    and all those other things, collectively in their totality,
    which we call the universe, in turn imply each individual object
    within.

    When you have a chain, you pick up a link, all the other links come 
    up with it. You see, because it implies, if this is a link, it is a 
    link in a chain. If it isn't, it's just an oval piece of metal.
    But if it's a link, up come all other links.

    So if you are an event, every event, there's no such thing as a single
    event, the only possible single event is all events whatsoever.
    That could be regarded as the only possible atom. The only possible 
    single thing is everything. But the things that imply things all imply
    each other.

    We know what we are only in relation to what we aren't.
    We know of the sensation of oneself only in relation to the sensation of 
    something other. 

    So the other goes with the self as the back goes with the front.
    And your life, however short, everything depends on it.
    If that did not happen, nothing would happen.

    So in this sense, the whole world bears your signature.
    It would not be the same world if it weren't for you.

        - Alan Watts
*/
const reality: AnyEvent[] = [
    {
        type: EventType.TIME,
        now: new Date("2020-08-20T00:00:00")
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "lk",
        personData: {
            name: "Leonhard Kuboschek",
            photoURL: "media/board/Leonhard_Kuboschek.jpg",
            meta: {
                email: "leo@jacobs-alumni.de",
                instagram: "https://www.instagram.com/myinstaisleo/",
                twitter: "https://twitter.com/kuboschek",
                linkedin: "https://www.linkedin.com/in/kuboschek",
                github: "https://github.com/kuboschek"
            },
            description: "Leo ('17) is currently working as a Software Consultant at Sopra Steria SE. When he's not writing enterprise-grade software for the German banking industry, you'll find him on his road bike chasing KOMs on Strava. While studying Computer Science at Jacobs, he was a member of the Rowing Team, Head of IT for the Undergraduate Student Government, as well as being team lead for the Stage, Light and Sound group of Campus Life. As the treasurer, he will ensure accurate and timely bookkeeping, with a focus on simplifying and automating processes for everyone."
        }
    },
    {
        type: EventType.APPOINTED,
        personID: "lk",
        role: "Treasurer"
    }
]

export default reality