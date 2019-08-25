class CreateFounders < ActiveRecord::Migration[5.2]
  def change
    create_table :founders do |t|
      t.string :full_name
      t.string :title
      t.string :bio
      t.string :image_url
    end
  end
end
