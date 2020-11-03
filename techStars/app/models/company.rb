class Company < ApplicationRecord
  has_many :founders
  has_many :categories,
           dependent: :destroy

  validates :name, presence: true
  validates :short_description, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :founded_date, presence: true
  validates :description, presence: true
end
