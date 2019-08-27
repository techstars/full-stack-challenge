# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

12.times do |index|
    Company.create(
        name: Faker::Company.name,
        description: Faker::Company.catch_phrase,
        founded_date: Faker::Date.between(from: 100.years.ago, to: Date.today),
        city: Faker::Address.city,
        state: Faker::Address.state
    )

    Founder.create(
        name: Faker::Name.name, 
        title: "Founder and #{Faker::Job.position}",
        company_id: index + 1
    )

end    