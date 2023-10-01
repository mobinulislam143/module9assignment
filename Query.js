const mongoose = require('mongoose')
const connectDB = async () => {
    try{
        const uri = "mongodb+srv://mobinulislam:8NWFTTL3vZqC2W0L@cluster0.mskd8ua.mongodb.net/"
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Mongoose is connect')

        
    }   catch(err){
        console.log(err)
    } 

}

const sampleSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    address: {type: String},
    
},
 {versionKey: false, 
timestamps: true}
)
const sampleModel = mongoose.model('people', sampleSchema)


const createCollection= async  (collectionName) => {
    try{
        await mongoose.connection.createCollection(collectionName)
        console.log('collection is created'+ result)
    }catch(err){
        console.log("collection can't created")
    }
}
const removeCollection = async (CollectionName) => {
    try{
        await mongoose.connection.dropCollection(CollectionName)
        console.log('collection remove success', result)
    }catch(err){
        console.error('Error removing collection:', err);
    }
    
}
const insertDocument = async (CollectionName, document) => {
    try {
        const Model = mongoose.model(collectionName);
        const newdocument = new Model(document)
        await newdocument.save();
        console.log("data insert successfully")
      } catch (error) {
        console.log("data can't insert.")
      }

}
const deleteDocument = async (collectionName, filter) => {
    try{
       const Model = mongoose.model(collectionName, new mongoose.Schema({}))
       await Model.deleteOne(filter)
        console.log("Document delete successfully")
       
    }catch(err){
        console.log("Error!!! deleting document")
    }

}

module.exports = { 
    connectDB,
    createCollection,
    removeCollection,
    insertDocument, 
    deleteDocument
}
