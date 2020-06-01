
var base_url =process.env.REACT_APP_API_BASE_URL+'resume/' ;
module.exports.getResumeData = function () {
    return fetch(`${base_url}getResumeData`);
}
module.exports.getNavBarDetails = function () {
    return fetch(`${base_url}getNavBarDetails`);
}

module.exports.getSummarizedData = function (data) {
    if (data !== "") {
        const requestOptions = {
            method: 'post',
            body: JSON.stringify({"data":data}),
            headers: { "Content-Type": "application/json" },
        };
        return fetch(`${base_url}getSummarizedData`, requestOptions);
    }
}


