exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Create Data in userController"})
 };

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "read Data in userController"})
 };

exports.delete = async (req, res) => { 
     res.status(200).json({status:"success", data: "delete Data in userController"})
};

exports.update = async (req, res) => {
     res.status(200).json({status:"success", data: "Update Data in userController"})
 };