User.create(email: "hello@hello.com",
            password: "asdfasdf",
            password_confirmation: "asdfasdf",
            name: "Fake User"
            )

User.create(email: "goodbye@goodbye.com",
            password: "asdfasdf",
            password_confirmation: "asdfasdf",
            name: "Bryan Lund",
            roles: "site_admin"
            )

3.times do |topic|
    Topic.create!(
        title: "topic #{topic}"
        )
end

puts "3 topics created"

10.times do |blog|
  Blog.create!(
    title: "Blog post #{blog}",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    topic_id: Topic.last.id
    )
end

puts "10 bloggs created"

5.times do |skill|
  Skill.create!(
    title:"Rails #{skill}",
    percent_utilized: 15
    )
end

puts "5 skills created"

8.times do |port|
  Portfolio.create!(
    title: "Portfolio #{port}",
    subtitle: "Ruby on rails",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    main_image: "http://placehold.it/600x400",
    thumb_image: "http://placehold.it/350x200"
    )
end

1.times do |port|
  Portfolio.create!(
    title: "Portfolio #{port}",
    subtitle: "Angular",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    main_image: "http://placehold.it/600x400",
    thumb_image: "http://placehold.it/350x200"
    )
end

puts "9 portfolios created"


3.times do |tech|
    Portfolio.last.technologies.create!(name: "Technology #{tech}")
    end

    puts "3 Technologies created"