class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :value
      t.belongs_to :badge
      t.belongs_to :student

      t.timestamps null: false
    end
  end
end
