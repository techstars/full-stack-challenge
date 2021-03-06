# handle exceptions
module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from StandardError, with: :all_standard_error
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotUnique, with: :record_not_unique
    rescue_from ActiveRecord::StatementInvalid, with: :statement_invalid
    rescue_from ActiveRecord::RecordNotSaved, with: :record_not_saved
  end

  def record_not_found(_exception)
    render json: 'Record Not Found', status: 404
  end

  def record_not_saved(exception)
    message = 'Record Not Saved'
    message += " Error(s): #{exception.message}" if Rails.env.development?
    
    render json: message, status: :unprocessable_entity
  end

  def record_not_unique(_exception)
    render json: 'Record Not Unique', status: :unprocessable_entity
  end

  def statement_invalid(exception)
    message = 'Statement Invalid'
    message += " Error(s): #{exception.message}" if Rails.env.development?

    render json: message, status: :unprocessable_entity
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
