# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  body        :string           not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, :body, :author_id, :business_id, presence: true
    validates :rating, inclusion: { in: (1..5) }
    validates :body, length: { minimum: 100 }
    validates :author_id, uniqueness: { scope: :business_id }

    belongs_to :user,
        class_name: :User,
        foreign_key: :author_id

    belongs_to :business,
        class_name: :Business,
        foreign_key: :business_id
end
