# handle exceptions
module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from StandardError, with: :all_standard_error
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotUnique, with: :record_not_unique
  end

  def record_not_found(_exception)
    render json: 'Record Not Found', status: 404
  end

  def record_not_unique(_exception)
    render json: 'Record Not Unique', status: :unprocessable_entity
  end

  def all_standard_error(exception)
    message = 'Something went wrong'
    message += " Error(s): #{exception.message}" if Rails.env.development?

    render json: message, status: 500
  end

  def record_invalid(exception)
    message = 'Record Invalid'
    message += " Error(s): #{exception.message}" if Rails.env.development?

    render json: message, status: :unprocessable_entity
  end
end
