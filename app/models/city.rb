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
class City < ApplicationRecord
  belongs_to :state

  validates :name, :state_id, presence: true
  validates :name, length: { minimum: 2 }

  validates :name, uniqueness: { scope: :state_id }

  def self.by_name_state(city_name, state_name)
    return nil unless city_name.present? && state_name.present?

    state = State.find_or_create_by(name: state_name.titleize)
    find_or_create_by(name: city_name.titleize, state: state)
  end
end
