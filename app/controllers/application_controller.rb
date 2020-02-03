class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  rescue_from StandardError do |exception|
    render status: 500,
           json: {errors: [{code: 'INTERNAL-SERVER-ERROR',
                            title: 'Something went wrong',
                            detail: exception.message}]}
  end
  
  rescue_from ActiveRecord::RecordNotFound do |exception|
    render status: :not_found,
           json: {errors: [{code: 'NOT-FOUND-ERROR',
                           title: 'Record not found',
                           detail: exception.message }]}
  end
  
  rescue_from ActionController::UnpermittedParameters do |exception|
    render status: :bad_request,
           json: { errors: [{ code: 'UNPERMITTED-PARAMS',
                              title: 'One or more field names was not in the permitted params.',
                              detail: exception.message }] }
  end

  rescue_from ActiveRecord::RecordInvalid do |exception|
    render status: :unprocessable_entity,
           json: { errors: [{ code: 'VALIDATION-ERROR',
                              title: 'One or more fields were invalid',
                              detail: exception.message }] }
  end

  def fallback_index_html
    respond_to do |format|
      format.html { render body: Rails.root.join('public/index.html').read }
    end
  end

end
