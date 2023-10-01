exports.create = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Create Admin API"
    })
};

exports.read = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Read Admin API"
    })
};

exports.delete = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Delete Admin API"
    })
};

exports.update = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Update Admin API"
    })
};
