class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.text :name
      t.text :city
      t.text :state
      t.text :description
      t.date :date_founded
      t.text :location

      t.timestamps
    end
  end
end
