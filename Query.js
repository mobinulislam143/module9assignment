const mongoose = require('mongoose')
const uri = "mongodb+srv://mobinulislam:8NWFTTL3vZqC2W0L@cluster0.mskd8ua.mongodb.net/"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log('Mongoose is connect')
}).catch((err) => {
    console.log(err)
})
const sampleSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    address: {type: String},
    
},
 {versionKey: false, 
timestamps: true}
)
const sampleModel = mongoose.model('people', sampleSchema)
const createCollection= async  () => {
    try{
        const result = await sampleModel.create({ name: 'Mahi', age: 30, address: "Coxsbazar" })
        console.log('new data is added'+ result)
    }catch(err){
        console.log("data is not added")
    }
}
const removeCollection = async (CollectionName) => {
    try{
        const CollectionName = 'peoples'
        const result = await mongoose.connection.dropCollection(CollectionName)
        console.log('collection remove success', result)
    }catch(err){
        console.error('Error removing collection:', err);
    }
    
}
const insertDocument = async (CollectionName, document) => {
    try {
        const Model = mongoose.model(collectionName);
        const document = new Model(data);
        await document.save();
        console.log("data insert successfully")
      } catch (error) {
        console.log("data can't insert.")
      }

}
const deleteDocument = async ( documentId) => {
    try{
        const result = await sampleModel.findByIdAndRemove(documentId)
        if (result){
            console.log("Document delete successfully")
        }else{
            console.log("Document can't delete")
        }
    }catch(err){
        console.log("Error!!! deleting document")
    }

}

module.exports = { 
    createCollection,
    removeCollection,
    insertDocument, 
    deleteDocument
}