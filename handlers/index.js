module.exports={
    ...require('./auth')
};
module.exports.errors=(err,req,res,next)=>{
    res.status(err.status||400).json({
        err: err.message || "Something Went wrong"
    });

};

module.exports.notFound=(req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};