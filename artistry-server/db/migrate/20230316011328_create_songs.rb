class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :genre
      t.integer :length
      t.integer :artist_id
    end
  end
end
