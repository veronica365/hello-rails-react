class GreetingController < ApplicationController
  def index
    @messages = Message.order('RANDOM()')
    respond_to do |format|
      format.html
      format.json { render json: @messages }
    end
  end

  def show
    @message = Message.order('RANDOM()').first
    respond_to do |format|
      format.html
      format.json { render json: @message }
    end
  end
end
