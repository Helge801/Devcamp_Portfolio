class EmailMessagesController < ApplicationController

def create
  new_email = EmailMessage.new(email_params)
  UserMailer.message_email(new_email.address,new_email.message).deliver_later
  redirect_to root_path
end

private

def email_params
  params.require(:email_message).permit(:address, :message)
end

end