class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name
      t.text :shortdesc
      t.text :longdesc
      t.string :location
      t.string :founded
      t.string :founders

      t.timestamps
    end
  end
end
