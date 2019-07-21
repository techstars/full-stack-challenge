class ChangeLocationToCityAndState < ActiveRecord::Migration[5.2]
  def change
    rename_column :companies, :location, :city
    add_column :companies, :state, :string
    add_column :companies, :founded_date, :date
  end
end
