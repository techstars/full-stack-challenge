class AddFoundingDateToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :dateFounded, :date
  end
end
