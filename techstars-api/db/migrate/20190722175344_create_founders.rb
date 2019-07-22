class CreateFounders < ActiveRecord::Migration[5.2]
  def change
    create_table :founders do |t|
      t.text :name
      t.text :title
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
