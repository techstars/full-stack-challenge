class Company < ApplicationRecord
  validates :name, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :description, presence: true
  validates :founded_date, presence: true

  has_many :founders, dependent: :destroy
end
