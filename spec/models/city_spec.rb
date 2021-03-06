# == Schema Information
#
# Table name: cities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  state_id   :bigint           not null
#
# Indexes
#
#  index_cities_on_name_and_state_id  (name,state_id) UNIQUE
#  index_cities_on_state_id           (state_id)
#
require 'rails_helper'

RSpec.describe City, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
