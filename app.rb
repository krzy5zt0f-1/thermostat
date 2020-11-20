require 'sinatra/base'
require 'sinatra/json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base

  enable :sessions
  set :session_secret, 'WTF'

  get '/' do
    erb :index
  end

  post '/post_temperature' do
    params = JSON.parse(request.body.read)
    text = params["_temp"]
    session[:text] = text
    json text: session[:text]
end

get '/temperature' do
  json text: session[:text]
end

  run! if app_file == $0
end
