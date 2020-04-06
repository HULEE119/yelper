class User < ApplicationRecord
    validates :first_name, :last_name, :email, :zip_code, :password_digest, :session_token, presence: true 
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true


    has_many :reviews,
        class_name: :Review,
        foreign_key: :author_id
end