class Api {
    getAllCurrency = async () => {
        try {
            return fetch(`https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL,LTC-BRL`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                return res;
            })
        } catch(error) {
            alert(error.message);
        }
    }
}

export default new Api;