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