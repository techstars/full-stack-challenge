class CreateFounders < ActiveRecord::Migration[6.1]
  def change
    create_table :founders do |t|
      t.string :full_name, null: false
      t.string :email, null: false
      t.string :title, null: false
      t.bigint :company_id, null: false
      
      t.timestamps null: false
    end

    add_index :founders, :company_id
    add_index :founders, [:email, :company_id], unique: true
  end
end
