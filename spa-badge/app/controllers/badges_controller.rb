class BadgesController < ApplicationController
  def create

  end

  def update

  end

  private

  def student_params
    params.permit(:id)
  end
end
