class StudentsController < ApplicationController
  def index
    @students = Student.all
    render json: @students
  end

  def show
    @student = Student.find(student_params)
    render json: @student
  end

  private

  def student_params
    params.permit(:name)
  end
end
