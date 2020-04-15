class ChangePhoneNumberLimitInBusinessTable < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :phone_number, :integer, limit: 8
  end
end
