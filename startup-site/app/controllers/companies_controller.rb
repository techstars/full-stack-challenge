class CompaniesController < ApplicationController
  def index
    render component: 'App', props: { companies: Company.all}
  end
end