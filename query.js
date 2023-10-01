1. 
//Create a new collection.
use("shoes")
db.createCollection("lotto")

2. 
//Removes a collection from the database.
use("shoes")
db.lotto.drop()

3.
//Inserts a single document into a collection.
use("shoes")
db.Apex.insertOne({
    name: "Emon"
})

4.
//Delete/remove a single document from the collection.
use("emon")
db.Apex.deleteOne(
    {_id: ObjectId("65170bb1282ccdb83e867a7c")}
)