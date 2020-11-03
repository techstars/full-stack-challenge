class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :description
      t.string :city
      t.string :state
      t.string :founded_date
      t.string :short_description
      t.timestamps
    end
  end
end
