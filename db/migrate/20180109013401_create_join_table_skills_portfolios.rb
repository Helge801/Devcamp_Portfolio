class CreateJoinTableSkillsPortfolios < ActiveRecord::Migration[5.1]
  def change
    create_join_table :skills, :portfolios do |t|
      # t.index [:skill_id, :portfolio_id]
      # t.index [:portfolio_id, :skill_id]
    end
  end
end
