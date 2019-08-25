class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :website
      t.string :city
      t.string :state
      t.string :short_description
      t.string :long_description
      t.string :logo_url
    end
  end
end
