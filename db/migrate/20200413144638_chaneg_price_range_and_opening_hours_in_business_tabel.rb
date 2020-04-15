class ChanegPriceRangeAndOpeningHoursInBusinessTabel < ActiveRecord::Migration[5.2]
  def change
    change_column_null :businesses, :price_range, false
    change_column_null :businesses, :opening_hours, false
  end
end
