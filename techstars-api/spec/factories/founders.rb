FactoryBot.define do
  factory :founder do
    name { Faker::Artist.name }
    title { Faker::Job.title }
    company_id nil
  end
end