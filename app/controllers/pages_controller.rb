class PagesController < ApplicationController
  def home
    @posts = Blog.all
    @skills = Skill.all
    @portfolios = Portfolio.all
    @skill_list = []
    @skills.each do |s|
      @skill_list.push(s.title)
    end
    @email_message = EmailMessage.new
  end

  def about
    @skills = Skill.all
  end

  def contact
  end

  def tech_news
    @tweets = SocialTool.twitter_search
  end
end
