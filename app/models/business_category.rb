# == Schema Information
#
# Table name: business_categories
#
#  id          :bigint           not null, primary key
#  business_id :integer          not null
#  category_id :integer          not null
#
class BusinessCategory < ApplicationRecord

    belongs_to :business,
        class_name: :Business,
        foreign_key: :business_id
    
    belongs_to :category,
        class_name: :Category,
        foreign_key: :category_id

end
