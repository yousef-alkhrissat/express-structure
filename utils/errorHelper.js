async function sendError(errorCode, errorMessage){
    return {
        errorCode,
        data: {
            code: errorCode,
            message: errorMessage,
        },
    };
}


module.exports = sendError;