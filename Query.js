db.createCollection("users");

db.users.drop()

db.users.insertOne({"name": "Mir Raisul Tanvir", "position": "Developer"});

db.users.deleteOne({"name": "Mir Raisul Tanvir"})
