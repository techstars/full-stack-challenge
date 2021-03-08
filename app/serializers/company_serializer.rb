class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :short_description,
             :city_name, :state_name, :start_date
  has_many :founders
             
  def city_name
    object.city.name
  end

  def state_name
    object.city.state.name
  end

  def short_description
    object.description.first(200)
  end
end