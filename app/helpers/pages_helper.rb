module PagesHelper

  def port_data portfolio
    skill_data = ""
    portfolio.skill.each do |skill|
      skill_data += "data-#{skill.title}=true ".html_safe
    end
    skill_data
  end 

  def twitter_parser tweet

        regex = %r{
        \b
        (
          (?: [a-z][\w-]+:
           (?: /{1,3} | [a-z0-9%] ) |
            www\d{0,3}[.] |
            [a-z0-9.\-]+[.][a-z]{2,4}/
          )
          (?:
           [^\s()<>]+ | \(([^\s()<>]+|(\([^\s()<>]+\)))*\)
          )+
          (?:
            \(([^\s()<>]+|(\([^\s()<>]+\)))*\) |
            [^\s`!()\[\]{};:'".,<>?«»“”‘’]
          )
        )
      }ix

    tweet.gsub(regex) do |url|
      "<a href=#{url} target='blank'>#{url}</a>"
    end.html_safe
  end
end