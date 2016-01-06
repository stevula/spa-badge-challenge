class AddVotesColToBadges < ActiveRecord::Migration
  def change
    add_column :badges, :votes, :integer
  end
end
