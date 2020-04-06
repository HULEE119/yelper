class Review < ApplicationRecord
    validates :rating, :body, presence: true
    validates :rating, inclusion: { in: (1..5) }
    validates :body, length: { minimum: 100 }

    belongs_to :user,
        class_name: :User,
        foreign_key: :author_id

    belongs_to :business,
        class_name: :Business,
        foreign_key: :business_id
end