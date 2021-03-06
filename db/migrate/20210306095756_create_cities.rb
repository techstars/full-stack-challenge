class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.bigint :state_id, null: false
      
      t.timestamps null: false
    end

    add_index :cities, :state_id
  end
end
