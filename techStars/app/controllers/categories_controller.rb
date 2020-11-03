class CategoriesController < ApplicationController
  before_action :find_category, only: [:show, :destroy]

  def index
    @categories = Category.all
    render json: @categories
  end

  def show
    render json: @category
  end

  def create
    @category = Category.new(category_params)
    if @category.valid?
      @category.save
      render json: @category
    else
      render error: { error: "Failed to add category record" }, status: 400
    end
  end

  def destroy
    @category.destroy
  end

  private

  def find_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(
      :name,
      :company_id
    )
  end
end
