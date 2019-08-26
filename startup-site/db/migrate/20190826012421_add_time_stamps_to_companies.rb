class AddTimeStampsToCompanies < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :created_at, :datetime, null: true
    add_column :companies, :updated_at, :datetime, null: true
  end
end
