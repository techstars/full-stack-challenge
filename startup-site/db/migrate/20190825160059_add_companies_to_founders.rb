class AddCompaniesToFounders < ActiveRecord::Migration[5.2]
  def change
    add_reference :founders, :company, foreign_key: true
  end
end
