class AddLatLngToBusinessTable < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lat, :float, null: false
    add_column :businesses, :lng, :float, null: false
  end
end
