# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  business_name :string           not null
#  address       :string           not null
#  city          :string           not null
#  state         :string           not null
#  zip_code      :integer          not null
#  business_site :string           not null
#  phone_number  :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Business < ApplicationRecord
    validates :business_name, :address, :city, :state, :zip_code, :business_site, :phone_number, presence: true

    has_many :business_categories,
        class_name: :BusinessCategory,
        foreign_key: :business_id

    has_many :categories,
        through: :business_categories,
        source: :category

    has_many :reviews,
        class_name: :Review,
        foreign_key: :business_id

    def average_rating
        reviews.average(:rating)
    end
end
