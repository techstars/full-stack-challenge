class Company < ApplicationRecord
  # Model Association
  has_many :founders, dependent: :destroy

  validates_presence_of :name, :city, :state, :description, :date_founded, :location
end
