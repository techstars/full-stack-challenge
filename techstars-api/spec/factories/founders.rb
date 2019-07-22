FactoryBot.define do
  factory :founder do
    name { Faker::StarWars.character }
    title { Faker::Job.title }
    company_id nil
  end
end