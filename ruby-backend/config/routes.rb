Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	#CEB -- 

	scope '/' do
		get '/' => 'home#index'
	end

	scope '/api' do
		scope '/v1' do
			get '/' => 'root#status'
			scope '/companies' do
				get '/' => 'company#index'
			end
		end
	end
end