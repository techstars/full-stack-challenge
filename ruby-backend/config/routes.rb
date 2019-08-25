Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	#CEB -- here be the routes for companies and members

	scope '/' do
		get '/' => 'home#index'
	end

	scope '/api' do
		scope '/v1' do
			get '/' => 'root#status'
			
			scope '/companies' do
				get '/' => 'company#index'
				get '/:id' => 'company#show'
				post '/' => 'company#create'
				delete '/:id' => 'company#delete'
				put '/:id' => 'company#update'
			end
			
			scope '/members' do
				get '/' => 'member#index'
				get '/:id' => 'member#show'
				post '/' => 'member#create'
				delete '/:id' => 'member#delete'
				put '/:id' => 'member#update'
			end
		end
	end
end