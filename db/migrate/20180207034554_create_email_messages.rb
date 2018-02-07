class CreateEmailMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :email_messages do |t|
      t.string :address
      t.text :message

      t.timestamps
    end
  end
end
