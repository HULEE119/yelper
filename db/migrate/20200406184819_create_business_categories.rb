class CreateBusinessCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :business_categories do |t|
      t.integer :business_id, foreign_key: true, null: false 
      t.integer :category_id, foreign_key: true, null: false 
    end
  end
end
