exports.create = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Create User API"
    })
};

exports.read = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Read User API"
    })
};

exports.delete = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Delete User API"
    })
};

exports.update = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Update User API"
    })
};