# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

company1 = Company.create(name: 'first company', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
company2 = Company.create(name: 'company 1', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
company3 = Company.create(name: 'company 2', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
company4 = Company.create(name: 'company 3', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
company5 = Company.create(name: 'company 4', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
company6 = Company.create(name: 'company 5', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
company7 = Company.create(name: 'company 6', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)

Company.create(name: 'company 7', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Company.create(name: 'company 8', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Company.create(name: 'company 9', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Company.create(name: 'company 10', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Company.create(name: 'company 11', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Company.create(name: 'company 12', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Company.create(name: 'company 13', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Company.create(name: 'company 14', city: 'Bangalore', state: 'karnataka', founded_date: 2.years.ago, description: desc)
Founder.create(name: 'Ayush Leal', title: "Founder & CTO", company_id: company1)
Founder.create(name: 'Margie Sykes', title: "Founder & CTO", company: company1)
Founder.create(name: 'Frederick Weston', title: "Founder & CTO", company: company1)
Founder.create(name: 'Henry Livingston', title: "Founder & CTO", company: company2)
Founder.create(name: 'Johnnie Mccann', title: "Founder & CTO", company: company2)
Founder.create(name: 'Leilani Bate', title: "Founder & CTO", company: company3)
Founder.create(name: 'Haaris Key', title: "Founder & CTO", company: company3)
Founder.create(name: 'Fionnuala Rasmussen', title: "Founder & CTO", company: company4)
Founder.create(name: 'Garfield Everett', title: "Founder & CTO", company: company5)
Founder.create(name: 'Chantel Sims', title: "Founder & CTO", company: company6)
