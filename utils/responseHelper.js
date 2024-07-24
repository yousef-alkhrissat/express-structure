async function sendResponse(responseCode, responseData){
    return {
        responseCode,
        data: responseData,
    };
}

module.exports = sendResponse;
