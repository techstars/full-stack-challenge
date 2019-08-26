class AddFoundedDateToCompanies < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :founded_date, :datetime, null: true
  end
end
