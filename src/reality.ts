import { AnyEvent, EventType, PersonUpdate, PersonDelete } from "./events";
import { BoardRole } from "./roles";

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
        type: EventType.PERSON_UPDATE,
        personID: "srustler",
        personData: {
            "name": "Stefan Rustler",
            "photo": true,
            "socials": {
                "email": "srustler@jacobs-alumni.de",
                "facebook": "https://www.facebook.com/stefan.rustler",
                "twitter": "https://twitter.com/RustlerStefan",
                "linkedin": "https://www.linkedin.com/pub/stefan-rustler/35/b61/38a"
            },
            "description": "Stefan Rustler (’12) has been on the Alumni Board since 2014. After his roles as Head Organizer of the annual Homecomings and Vice-President, he took up the role as President in 2019. \n\nStefan graduated from Jacobs with a BSc in Physics and finished his MSc in Physics at ETH Zurich. Currently, he is working for Accenture in Zurich as management consultant in the field of Analytics and Digital Transformation. He is also the founder of the Thailand-based \"Data Science Beach Camp\", an affordable bootcamp format to teach advanced digital skills."
        },
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "skuzmanovski",
        personData: {
            "name": "Stefan Kuzmanovski",
            "photo": true,
            "socials": {
                "email": "skuzmanovski@jacobs-alumni.de",
                "facebook": "https://www.facebook.com/stefan.kuzmanovski92",
                "linkedin": "https://www.linkedin.com/in/stefankuzmanovski"
            },
            "description": "Stefan Kuzmanovski ('14) is a technical program manager at Tesla in Palo Alto, California. Prior to joining Tesla he earned his Master of Environmental Management at the Yale School of Forestry and Environmental Studies. At Jacobs University he pursued a dual degree in Earth and Space Sciences and Integrated Environmental Studies. \n\nHe was involved with the Environmental Club and was a Student Assistant in the Nordmetall College Office for 2 years. Stefan is excited to help develop and grow the Alumni Association as well as provide value to the Association’s members worldwide."
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "mazka",
        personData: {
            "name": "Muhammad Azka",

            "photo": true,
            "socials": {
                "email": "mazka@jacobs-alumni.de"
            },
            "description": "Muhammad Azka ('19) is a product, supply-demand manager in Zalando SE, where he is managing partners and brands in an affiliate marketplace business model in Europe's largest fashion platform. \n\nHe graduated in 2019 with a BSc in Industrial Engineering and Management, representing the class as an undergraduate speaker. Prior to joining Zalando, he is involved a lot in the startup community such as JSC, Bremen Startups, and have tried founding different ventures. While currently building his new venture, Azka is committed to strengthen the alumni community, as he believed the community can achieve symbiotic benefits while leveraging the network, expertise, and knowledge of every individuals."
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "smin",
        personData:
        {
            "name": "Sharon Min",

            "photo": true,
            "socials": {
                "email": "SMin@jacobs-alumni.de"
            },
            "description": "Sharon ('16) has been a Recruitment Counselor and Admissions Officer at Jacobs since 2017. \n\nShe is based in Bremen, and travels very often to South and South East Asia to recruit new students that will carry on the Jacobs Spirit. She has also developed and currently oversees different initiatives in tandem with the Alumni Relations Office to promote alumni involvement in student recruitment. She joined the Alumni Board as Assessor for Network Development as she travels to many different cities where alumni are located for work, and is able to lend personal support to the local chapters and create new connections between different alumni classes."
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "leo",
        personData:
        {
            "name": "Leonhard Kuboschek",
            "photo": true,
            "socials": {
                "email": "leo@jacobs-alumni.de",
                "instagram": "https://www.instagram.com/myinstaisleo",
                "twitter": "https://twitter.com/kuboschek",
                "linkedin": "https://www.linkedin.com/in/kuboschek",
                "github": "https://github.com/kuboschek"
            },
            "description": "Leo ('17) is currently working as a Software Consultant at Sopra Steria SE. \n\nWhen he's not writing enterprise-grade software for the German banking industry, you'll find him on his road bike chasing KOMs on Strava. While studying Computer Science at Jacobs, he was a member of the Rowing Team, Head of IT for the Undergraduate Student Government, as well as being team lead for the Stage, Light and Sound group of Campus Life. As the treasurer, he will ensure accurate and timely bookkeeping, with a focus on simplifying and automating processes for everyone."
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "abogoeva",
        personData:
        {
            "name": "Albena Bogoeva",

            "photo": true,
            "socials": {
                "email": "abogoeva@jacobs-alumni.de",
                "facebook": "https://www.facebook.com/albenab",
                "linkedin": "https://www.linkedin.com/in/abogoeva/"
            },
            "description": "Albena ('14) is joining the Alumni Board to strengthen its public presence in the community and support its communication efforts to motivate more people to be active members and uphold the Jacobs spirit.\n\nAfter graduating from Jacobs with a BSc in Information Management and Systems in 2014, she finished her MSc in Business Informatics at the University of Mannheim. At Jacobs, she coordinated the Rotaract Club, was a member of the Stage, Light, Sound Crew, a proud Pulse Express employee and passionate C3 resident. She is currently working as a management consultant in Mannheim, helping customers succeed in their digital transformations in the area of procurement."
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "nouriajantz-naeem",
        personData:
        {
            "name": "Nouria Jantz-Naeem",
            "photo": true,
            "socials": {
                "email": "njantz-naeem@jacobs-alumni.de"
            },
            "description": "Nouria ('18) is currently studying her M.Sc. in medical and clinical Immunology in Magdeburg. At Jacobs University she graduated with a B.Sc. in Earth and Environmental Sciences and was involved in various student clubs and organizations and acted as the President of the Undergraduate Student Government. \n\nNouria has now taken over the role of Assessor for Fundraising and is excited about working hard on exploring long-term and sustainable fundraising and financing avenues for the Association!"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "fpohle",
        personData:
        {
            "name": "Franziska Pohle",
            "photo": true,
            "socials": {
                "email": "fpohle@jacobs-alumni.de"
            },
            "description": "Franziska ('15) is working for academic publisher Elsevier in Amsterdam. She graduated from Jacobs with a BA in International Politics and History and from University of Amsterdam with an MSc in Corporate Communication ('17). \n\nAt Jacobs, she was Secretary of the Rotaract Club, Section Leader at J-Cappella, and part of the first class that made Nordmetall cool. As Assessor for Member Management, she is looking for ways to make the association attractive for old and new alumni and working on a smooth registration process."
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "twiesing",
        personData:
        {
            "name": "Tom Wiesing",
            "photo": true,
            "socials": {
                "email": "twiesing@jacobs-alumni.de",
                "facebook": "https://www.facebook.com/tom.wiesing",
                "twitter": "https://twitter.com/tkw01536",
                "linkedin": "https://www.linkedin.com/in/tom-wiesing",
                "github": "https://github.com/tkw1536"
            },
            "description": "Tom ('15, '17) currently pursues a PhD in Computer Science as part of the KWARC research group in Erlangen, Germany. \n\nHe graduated from Jacobs with a BSc in Applied and Computational Mathematics in 2015. He also received an MSc at Jacobs as part of the first class of Data Engineering in 2017. During his time at Jacobs, he was president of the GSA in the 2016 - 2017 academic year. As Assessor for Information Technology, he will focus on coding and supporting all IT systems of the Alumni, supported by a team of volunteer coders."
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "ad",
        personData: {
            "name": "Alina Degtiarova"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "aa",
        personData: {
            "name": "Andres Alvarado"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "ah",
        personData: {
            "name": "Anna Habighorst"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "as",
        personData: {
            "name": "Anna-Lena Schindl"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "av",
        personData: {
            "name": "Anne Valtink"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "bw",
        personData: {
            "name": "Beenish Waris"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "dag",
        personData: {
            "name": "Daniel Alfonso Garcia"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "eg",
        personData: {
            "name": "Ewa Grzechnik"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "fm",
        personData: {
            "name": "Frederique Mittelstaedt"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "is",
        personData: {
            "name": "Irina Shames"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "im",
        personData: {
            "name": "Ivan Mandadzhiev"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "jg",
        personData: {
            "name": "Julia Gyorffy"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "km",
        personData: {
            "name": "Konstantin Mihov"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "ll",
        personData: {
            "name": "Lida-Maria Lottko"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "ml",
        personData: {
            "name": "Max Lohmann"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "mw",
        personData: {
            "name": "Melanie Wilneder"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "md",
        personData: {
            "name": "Mohsin Dar"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "pp",
        personData: {
            "name": "Petar Perkovic"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "pd",
        personData: {
            "name": "Peter Dabrowski"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "ph",
        personData: {
            "name": "Philipp Herzberg"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "rb",
        personData: {
            "name": "Răzvan Barabaș"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "re",
        personData: {
            "name": "Robert Eckhoff"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "rp",
        personData: {
            "name": "Raluca Puie"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "sa",
        personData: {
            "name": "Stefan Anca"
        }
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: "st",
        personData: {
            "name": "Suna Turhan"
        }
    },
    {
        type: EventType.TIME,
        now: new Date("2004-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "rp",
        role: BoardRole.President
    },
    {
        type: EventType.TIME,
        now: new Date("2004-12-31T23:00:00.000Z")
    },
    {
        type: EventType.TIME,
        now: new Date("2006-01-01T00:00:00.000Z")
    },
    {
        type: EventType.TIME,
        now: new Date("2006-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "rp"
    },
    {
        type: EventType.TIME,
        now: new Date("2007-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "aa",
        role: BoardRole.President
    },
    {
        type: EventType.ELECTED,
        personID: "mw",
        role: BoardRole.Secretary
    },
    {
        type: EventType.ELECTED,
        personID: "re",
        role: BoardRole.AssessorSpecialProjects
    },
    {
        type: EventType.TIME,
        now: new Date("2007-12-31T23:00:00.000Z")
    },
    {
        type: EventType.TIME,
        now: new Date("2009-01-01T00:00:00.000Z")
    },
    {
        type: EventType.TIME,
        now: new Date("2009-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "aa"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "mw"
    },
    {
        type: EventType.TIME,
        now: new Date("2010-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "eg",
        role: BoardRole.Treasurer
    },
    {
        type: EventType.ELECTED,
        personID: "is",
        role: BoardRole.VicePresident
    },
    {
        type: EventType.ELECTED,
        personID: "pp",
        role: BoardRole.President
    },
    {
        type: EventType.ELECTED,
        personID: "sa",
        role: BoardRole.Secretary
    },
    {
        type: EventType.TIME,
        now: new Date("2010-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "is"
    },
    {
        type: EventType.TIME,
        now: new Date("2011-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "jg",
        role: BoardRole.AssessorSpecialProjects
    },
    {
        type: EventType.ELECTED,
        personID: "km",
        role: BoardRole.AssessorSpecialProjects
    },
    {
        type: EventType.ELECTED,
        personID: "pd",
        role: BoardRole.VicePresident
    },
    {
        type: EventType.TIME,
        now: new Date("2011-12-31T23:00:00.000Z")
    },
    {
        type: EventType.TIME,
        now: new Date("2012-01-01T00:00:00.000Z")
    },
    {
        type: EventType.TIME,
        now: new Date("2012-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "eg"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "pp"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "pd"
    },
    {
        type: EventType.TIME,
        now: new Date("2013-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "dt",
        role: BoardRole.VicePresident
    },
    {
        type: EventType.ELECTED,
        personID: "pd",
        role: BoardRole.President
    },
    {
        type: EventType.ELECTED,
        personID: "st",
        role: BoardRole.Treasurer
    },
    {
        type: EventType.TIME,
        now: new Date("2013-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "dt"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "jg"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "km"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "re"
    },
    {
        type: EventType.TIME,
        now: new Date("2014-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "ad",
        role: BoardRole.AssessorPublicRelations
    },
    {
        type: EventType.ELECTED,
        personID: "dag",
        role: BoardRole.VicePresident
    },
    {
        type: EventType.TIME,
        now: new Date("2014-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "st"
    },
    {
        type: EventType.TIME,
        now: new Date("2015-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "ah",
        role: BoardRole.Treasurer
    },
    {
        type: EventType.ELECTED,
        personID: "ph",
        role: BoardRole.AssessorMemberManagement
    },
    {
        type: EventType.TIME,
        now: new Date("2015-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "ad"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "ah"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "dag"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "pd"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "sa"
    },
    {
        type: EventType.TIME,
        now: new Date("2016-01-01T00:00:00.000Z")
    },
    {
        type: EventType.ELECTED,
        personID: "as",
        role: BoardRole.AssessorNetworkDevelopment
    },
    {
        type: EventType.ELECTED,
        personID: "av",
        role: BoardRole.President
    },
    {
        type: EventType.ELECTED,
        personID: "ei",
        role: BoardRole.AssessorSpecialProjects
    },
    {
        type: EventType.ELECTED,
        personID: "fm",
        role: BoardRole.AssessorInformationTechnology
    },
    {
        type: EventType.ELECTED,
        personID: "ll",
        role: BoardRole.AssessorPublicRelations
    },
    {
        type: EventType.ELECTED,
        personID: "ml",
        role: BoardRole.AssessorEventManagement
    },
    {
        type: EventType.ELECTED,
        personID: "rb",
        role: BoardRole.Secretary
    },
    {
        type: EventType.TIME,
        now: new Date("2016-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "ph"
    },
    {
        type: EventType.TIME,
        now: new Date("2017-01-01T00:00:00.000Z")
    },
    {
        type: EventType.TIME,
        now: new Date("2017-12-31T23:00:00.000Z")
    },
    {
        type: EventType.VOTED_OUT,
        personID: "fm"
    },
    {
        type: EventType.VOTED_OUT,
        personID: "ll"
    },
    {
        type: EventType.TIME,
        now: new Date('2018-01-15') // TODO More specific
    },
    {
        type: EventType.ELECTED,
        personID: 'fpohle',
        role: BoardRole.AssessorMemberManagement
    },
    {
        type: EventType.TIME,
        now: new Date('2018-09-22') // GA 2018 @ Homecoming
    },
    {
        type: EventType.ELECTED,
        personID: 'twiesing',
        role: BoardRole.AssessorInformationTechnology
    },
    {
        type: EventType.TIME,
        now: new Date("2019-09-22") // GA 2019
    },
    {
        type: EventType.ELECTED,
        personID: 'srustler',
        role: BoardRole.President
    },
    {
        role: BoardRole.VicePresident,
        type: EventType.ELECTED,
        personID: 'skuzmanovski'
    },
    {
        role: BoardRole.Secretary,
        type: EventType.ELECTED,
        personID: 'mazka'
    },
    {
        role: BoardRole.AssessorNetworkDevelopment,
        type: EventType.ELECTED,
        personID: 'smin'
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: 'mdar',
        personData: {
            description: 'Mohsin Dar is new.',
            name: 'Mohsin Dar'
        }
    },
    {
        role: BoardRole.AssessorFundraising,
        type: EventType.ELECTED,
        personID: 'mdar'
    },
    {
        role: BoardRole.AssessorPublicRelations,
        type: EventType.ELECTED,
        personID: 'abogoeva'
    },
    {
        type: EventType.PERSON_UPDATE,
        personID: 'ccalvopina',
        personData: {
            name: "Cristina Trifon-Calvopiña",
            photo: true,

            socials: {
                email: "CCalvopina@jacobs-alumni.de"
            },

            description: "Cristina (‘13) works as a Recruitment Counselor at Jacobs University, traveling mostly in Latin America and the Caribbean. She joined the Alumni Board in 2019 and has worked on projects involving the alumni network in her function as a recruiter, such as the Starducks initiative where alumni meet with prospective students, and the Jacobs University Blog. She studied International Politics and History at Jacobs and continued her education in the fields of literature and cultural studies at the University of Münster."
        }
    },
    {
        role: BoardRole.AssessorEventManagement,
        type: EventType.ELECTED,
        personID: 'ccalvopina'
    },
    {
        type: EventType.TIME,
        now: new Date('2020-10-14')
    },
    {
        type: EventType.ELECTED,
        personID: 'cblindu',
        role: BoardRole.Treasurer
    },
    {
        type: EventType.APPOINTED,
        personID: 'njantz-naeem',
        role: BoardRole.AssessorFundraising
    },
    {
        type: EventType.TIME,
        now: new Date('2020-10-20')
    },
    {
        type: EventType.VOTED_OUT, // Resigned
        personID: 'ccalvopina'
    },
    {
        type: EventType.VOTED_OUT,
        personID: 'cblindu'
    },
    {
        type: EventType.APPOINTED,
        personID: "leo",
        role: BoardRole.Treasurer
    },
]

export default reality