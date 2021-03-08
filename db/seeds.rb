City.destroy_all
State.destroy_all
Company.destroy_all
Founder.destroy_all

cities = []

while cities.length < 7
  begin
    city = FactoryBot.create(:city)
    cities << city
  rescue ActiveRecord::RecordInvalid => err
    puts err
  end
end

20.times do |i|
  company = FactoryBot.create(
    :company,
    city: cities.sample,
    description: Faker::Lorem.paragraph(sentence_count: 100, supplemental: true, random_sentences_to_add: 4)
  )

  FactoryBot.create_list(:founder, 2, company: company)
end
