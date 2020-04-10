class RemovePriceRangeFromBusiness < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :price_range, :string
  end
end
