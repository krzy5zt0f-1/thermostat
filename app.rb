require 'sinatra/base'
require 'sinatra/json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base

  enable :sessions
  set :session_secret, 'WTF'

  get '/' do
    erb :index
  end

  post '/temp' do
    params = JSON.parse(request.body.read)
    text = params["_temp"]
    session[:text] = text
    json text: session[:text]
end

get '/temp' do
  json text: session[:text]
end

get '/location' do
  p json loc: session[:loc]
end

post '/location' do
  params = JSON.parse(request.body.read)
  loc = params["loc"]
  session[:loc] = loc
  json loc: session[:loc]
end

  run! if app_file == $0
end
