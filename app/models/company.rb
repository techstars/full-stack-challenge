class Company < ApplicationRecord
  has_many :founders, dependent: :destroy
  validates_presence_of :name, :city, :state, :founded_date
end
