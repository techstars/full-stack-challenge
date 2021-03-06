# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  name        :string           not null
#  start_date  :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  city_id     :bigint           not null
#
# Indexes
#
#  index_companies_on_city_id  (city_id)
#
class Company < ApplicationRecord
  belongs_to :city
  has_many :founders, dependent: :destroy

  validates :name, :description, :city_id, presence: true
  validates :name, length: { minimum: 2 }
  validates :description, length: { minimum: 20 }

  before_validation :fetch_city_state

  attr_accessor :city_name, :state_name

  private

  def fetch_city_state
    self.city = City.by_name_state(city_name, state_name) if city_name.present? && state_name.present?
  end
end
