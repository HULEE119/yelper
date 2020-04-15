class AddPriceRangOpeningHoursToBusinessTable < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price_range, :string
    add_column :businesses, :opening_hours, :string   
  end
end
