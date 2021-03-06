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
#  index_cities_on_state_id  (state_id)
#
class City < ApplicationRecord
  belongs_to :state
  
  validates :name, :state_id, presence: true
  validates :name, length: { minimum: 2 }
end
