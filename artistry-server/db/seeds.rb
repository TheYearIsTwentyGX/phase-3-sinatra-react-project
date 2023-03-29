puts "🌱 Seeding spices..."

Artist.create(name: "KiNG MALA", genre: "Alt-Z", age: 25, birthdate: "1992-06-02", hometown: "El Paso, TX")
Artist.create(name: "UPSAHL", genre: "Alt-Z", age: 24, birthdate: "1998-11-28", hometown: "Phoenix, AZ")
Song.create(title: "Cult Leader", genre: "Alt-Z", length: 163, artist_id: 1, album: "honey catching season", track_number: 3)
Song.create(title: "Homebody", genre: "Alt-Z", length: 161, artist_id: 1, album: "GEMiNi", track_number: 3)
Song.create(title: "Lunatic", genre: "Alt-Z", length: 141, artist_id: 2, album: "Lady Jesus", track_number: 4)
Song.create(title: "Thriving", genre: "Alt-Z", length: 135, artist_id: 2, album: "Lady Jesus", track_number: 5)

puts "✅ Done seeding!"
