class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.text   :description, null: false
      t.bigint :city_id, null: false
      t.date   :start_date
      
      t.timestamps null: false
    end

    add_index :companies, :city_id
  end
end
