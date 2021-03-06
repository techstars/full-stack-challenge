# == Schema Information
#
# Table name: states
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class State < ApplicationRecord
  has_many :cities
  
  validates :name, presence: true
  validates :name, length: { minimum: 2 }
end
