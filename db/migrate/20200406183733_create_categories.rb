class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :business_type, null: false
    end
    add_index :categories, :business_type, unique: true
  end
end
