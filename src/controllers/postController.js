exports.create = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Create Post API"
    })
};

exports.read = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Read Post API"
    })
};

exports.delete = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Delete Post API"
    })
};

exports.update = async(req, res)=>{
    res.status(200).json({
        status: "success",
        data: "Update Post API"
    })
};