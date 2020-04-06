class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business_name, null: false
      t.string :price_range, null: false 
      t.string :address, null: false
      t.string :city, null: false 
      t.string :state, null: false 
      t.integer :zip_code, null: false 
      t.string :business_site, null: false 
      t.integer :phone_number, null: false 

      t.timestamps
    end
    add_index :businesses, :business_name, unique: true
  end
end
