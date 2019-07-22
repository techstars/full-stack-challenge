require 'factory_bot_rails'

include FactoryBot::Syntax::Methods

Founder.destroy_all
Company.destroy_all

company1 = create(:company_with_founders, founders_count: 2)
company2 = create(:company_with_founders, founders_count: 1)
company3 = create(:company_with_founders, founders_count: 3)
company4 = create(:company_with_founders, founders_count: 5)
company5 = create(:company_with_founders, founders_count: 2)

