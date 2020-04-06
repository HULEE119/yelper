class Category < ApplicationRecord
    validates :business_type, presence: true 
    validates :business_type, uniqueness: true

    has_many :business_categories,
        class_name: :BusinessCategory,
        foreign_key: :category_id

    has_many :categorized_businesses,
        through: :categorized_businesses,
        source: :business

end