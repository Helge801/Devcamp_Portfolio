
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address:              'smtp.gmail.com',
  port:                 587,
  user_name:            ENV['MY_EMAIL'],
  password:             ENV['MY_EMAIL_PASSWORD'],
  authentication:       'plain',
  enable_starttls_auto: true  }