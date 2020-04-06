class BusinessCategory < ApplicationRecord
    validates :business_id, uniqueness: { scope: :category_id }

    belongs_to :business,
        class_name: :Business,
        foreign_key: :business_id
    
    belongs_to :category,
        class_name: :Category,
        foreign_key: :category_id

end