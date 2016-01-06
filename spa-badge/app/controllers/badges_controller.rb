class BadgesController < ApplicationController
  def create
    badge = Badge.new(badges_params)

    if badge.save
      render json: badge, status: :created
    else
      render json: badge, status: :unprocessable_entity
    end
  end

  def update

  end

  private

  def badges_params
    params.permit(:student_id, :name)
  end
end
