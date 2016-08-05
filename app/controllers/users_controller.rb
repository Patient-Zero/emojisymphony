class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def audio_path(source, options = {})
    path_to_asset(source, {type: :audio}.merge!(options))
  end

  def index
  end

  def create 
  @user = User.new(user_params) 
  if @user.save 
    session[:user_id] = @user.id 
    redirect_to '/' 
  else 
    redirect_to '/signup' 
  end 
end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
