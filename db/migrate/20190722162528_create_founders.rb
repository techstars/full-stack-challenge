class CreateFounders < ActiveRecord::Migration[5.2]
  def change
    create_table :founders do |t|
      t.string :name
      t.integer :businessid

      t.timestamps
    end
  end
end
