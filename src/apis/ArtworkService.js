var base_url = `${process.env.REACT_APP_API_BASE_URL}artwork/`

const ValidationService = {
    getBase64Images: function() {
        console.log(base_url,'***88')
        return fetch(`${base_url}getBase64Images`);
    },


};

export default ValidationService;