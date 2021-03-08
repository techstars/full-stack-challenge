module RequestSpecHelper
  def json
    @json ||= begin
      body = JSON.parse(response.body)
      body.is_a?(Hash) ? body.with_indifferent_access : body
    end
  end
end