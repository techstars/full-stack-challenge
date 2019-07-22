require 'faker'

FactoryBot.define do
  factory :founder, class: Founder do
    company
    name { Faker::Name.name }
    title {Faker::Job.title}
  end
end
