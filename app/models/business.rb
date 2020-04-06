class Business < ApplicationRecord
    validates :business_name, :price_range, :address, :city, :state, :zip_code, :business_site, :phone_number, presence: true

    has_many :business_categories,
        class_name: :BusinessCategory,
        foreign_key: :business_id

    has_many :categories,
        through: :business_categories,
        source: :category

    has_many :reviews,
        class_name: :Review,
        foreign_key: :business_id
end