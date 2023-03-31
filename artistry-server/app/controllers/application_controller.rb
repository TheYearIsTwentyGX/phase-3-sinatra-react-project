class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/artists" do
    Artist.all.to_json
  end
  get "/artists/:id" do
    Artist.find(params[:id]).to_json
  end
  post "/artists" do
    Artist.create(params).to_json
  end
  get "/songs" do
    Song.all.to_json
  end
  post "/songs" do
    Song.create(params).to_json
  end
  patch "/artists/:id" do
    Artist.find(params[:id]).update(params).to_json
  end
  delete "/artists/:id" do
    Artist.find(params[:id]).destroy.to_json
    Song.find(params[:artist_id]).destroy.to_json
  end
  get "/artists/:id/songs" do
    Artist.find(params[:id]).songs.to_json
  end
  get "/artists/:id/songs/:song_id" do
    Artist.find(params[:id]).songs.find(params[:song_id]).to_json
  end
  post "/artists/:id/songs" do
    Artist.find(params[:id]).songs.create(params).to_json
  end
  patch "/artists/:id/songs/:song_id" do
    Artist.find(params[:id]).songs.find(params[:song_id]).update(params).to_json
  end
  delete "/artists/:id/songs/:song_id" do
    Artist.find(params[:id]).songs.find(params[:song_id]).destroy.to_json
  end
end
