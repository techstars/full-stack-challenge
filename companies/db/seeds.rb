require 'factory_bot_rails'

include FactoryBot::Syntax::Methods

Company.destroy_all

create_list(:company, 5)

