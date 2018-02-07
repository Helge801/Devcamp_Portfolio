class UserMailer < ApplicationMailer
  default from: ENV['MY_EMAIL']

  def message_email(address, message)
    @address = address
    @message = message
    mail(to: ENV['MY_EMAIL'], subject: 'New message from portfolio')
  end
end
