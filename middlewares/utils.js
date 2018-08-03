const mongoose = require('mongoose');
const createError = require('http-errors');

const checkId = (req, res, next) => {
    const { id } = req.params;
    const regExp = RegExp('^[a-fA-F0-9]{24}$');
    if (!mongoose.Types.ObjectId.isValid(id) || !regExp.test(id)) {
        next(createError(404));
    } else {
        next()
    }
}

module.exports = checkId;
