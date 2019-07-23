# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

companies = Company.create(
  [
    {
          name: "The Cloak Company",
          city: "Denver",
          state: "CO",
          description: "The Cloak Company is developing the world's first invisibility cloak
          although right now all they sell are coffee mugs.",
          date_founded: "1998-12-05",
        },
    {
          name: "Gravity Inc",
          city: "Boston",
          state: "MA",
          description: "Gravity Inc is developing anti-gravity socks to allow basketball
          players to jump higher without the use of steroids.",
          date_founded: "1995-11-11",
        },
    {
          name: "Pied Piper",
          city: "Silicon Valley",
          state: "CA",
          description: "Pied Piper is the changing the world with their lossless compression
          algorithm that has tech giants like Galvin Belson in a fit.",
          date_founded: "2006-01-01",
        },
    {
          name: "Fruit Money",
          city: "Chicago",
          state: "IL",
          description: "The Action Group is a Chicago based investment firm that allows people
          to buy stock with various fruits rather than currency",
          date_founded: "1997-10-05",
        },
    {
          name: "Hill's have Eyes",
          city: "Boulder",
          state: "CO",
          description: "This Boulder startup is disrupting the eyewear industry by selling
          state of the art contacts to college students.",
          date_founded: "2010-01-05",
        },
    {
          name: "Faceback",
          city: "Miami",
          state: "FL",
          description: "Faceback's revolutionary AI technology allows users to take a picture of their face
          and see what the back of their head looks like.",
          date_founded: "2000-02-02",
        },
    {
          name: "ExtraLarge",
          city: "Oakland",
          state: "CA",
          description: "ExtraLarge is an online blog especially centered towards software developers,
          it's filled with outdated tutorials guaranteed to waste hours of your time",
          date_founded: "2018-01-05",
        },
    {
          name: "Matrix LLC",
          city: "Las Vegas",
          state: "NV",
          description: "Matrix LLC is creating a fully immersive VR simulation of the world as we
          knew it in 1999.",
          date_founded: "1999-12-12",
        },
    {
          name: "Y2K19",
          city: "Las Vegas",
          state: "NV",
          description: "Y2K19 employs people who are just now coming out of the shelters they
          built and stayed in during the Y2K scare. They mostly make canned foods.",
          date_founded: "2019-01-01",
        },
    {
          name: "InstaHuman",
          city: "Los Angeles",
          state: "CA",
          description: "InstaHuman is experimenting with technology that allows humans to be
          grown on trees for only a month before falling from the tree and becoming a fully functioning adult",
          date_founded: "2005-01-05",
        },
    {
          name: "iCant",
          city: "Seattle",
          state: "WA",
          description: "iCant is a revolutionary service that allows people to contact them, describe their dreams,
          and receive feedback on why they won't be able to achieve said dreams.",
          date_founded: "2016-12-05",
        },
    {
          name: "RedTooth",
          city: "Denver",
          state: "CO",
          description: "RedTooth is developing technology that will allow users to stream videos
          of food directly into their mouths for consumption.",
          date_founded: "1998-12-05",
        },
  ]
)

founders = Founder.create(
  [
    {
      name: "Frank Booth",
      title: "CEO",
      company_id: 1,
    },
    {
      name: "James Thomas",
      title: "CTO",
      company_id: 2,
    },
    {
      name: "Craig Feilds",
      title: "CEO",
      company_id: 3,
    },
    {
      name: "Steve Hobbs",
      title: "COO",
      company_id: 4,
    },
    {
      name: "Tim Atworth",
      title: "CTO",
      company_id: 5,
    },
    {
      name: "Jim Gravy",
      title: "CTO",
      company_id: 6,
    },
    {
      name: "Jane Plain",
      title: "CEO",
      company_id: 7,
    },
    {
      name: "Margaret Hatcher",
      title: "CEO",
      company_id: 8,
    },
    {
      name: "Sarah Jackson",
      title: "CTO",
      company_id: 9,
    },
    {
      name: "Tracy Thomas",
      title: "CMO",
      company_id: 10,
    },
    {
      name: "John Lincoln",
      title: "CEO",
      company_id: 11,
    },
    {
      name: "Lee Smith",
      title: "CEO",
      company_id: 12,
    },
  ]
)
