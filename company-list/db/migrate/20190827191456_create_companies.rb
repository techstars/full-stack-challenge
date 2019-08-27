class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :description
      t.date :founded_date

      t.timestamps
    end
    add_index :companies, :name, unique: true
  end
end
