class ChanegNullValueForBusinessTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :businesses, :price_range, true
    change_column_null :businesses, :opening_hours, true
  end
end
