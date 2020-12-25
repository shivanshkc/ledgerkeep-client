const axios = require("axios").default;
const { routeFactory, handleAPIErr } = require("./utils");

class Ledgerkeep {
  constructor(addr) {
    this.__addr = addr;
  }

  async getCategoryCount(token) {
    const url = `${routeFactory.category(this.__addr)}/count`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async putCategory(token, categoryName) {
    const url = `${routeFactory.category(this.__addr)}/${categoryName}`;
    try {
      await axios.put(url, {}, { headers: { authorization: token } });
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async delCategory(token, categoryName) {
    const url = `${routeFactory.category(this.__addr)}/${categoryName}`;
    try {
      await axios.delete(url, { headers: { authorization: token } });
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async getAllCategories(token, sortBy = "") {
    const url = `${routeFactory.category(this.__addr)}`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
        params: { sortBy },
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async getTransactionCount(token, queries) {
    const url = `${routeFactory.transaction(this.__addr)}/count`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
        params: queries,
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async getTransactionCountByInterval(token, queries) {
    const url = `${routeFactory.transaction(this.__addr)}/countByInterval`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
        params: queries,
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async getTransactionSum(token, queries) {
    const url = `${routeFactory.transaction(this.__addr)}/sum`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
        params: queries,
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async getTransactionSumByInterval(token, queries) {
    const url = `${routeFactory.transaction(this.__addr)}/sumByInterval`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
        params: queries,
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async getTransactionByID(token, txID) {
    const url = `${routeFactory.transaction(this.__addr)}/${txID}`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async patchTransactionByID(token, txID, updates) {
    const url = `${routeFactory.transaction(this.__addr)}/${txID}`;
    try {
      await axios.patch(url, updates, {
        headers: { authorization: token },
      });
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async delTransactionByID(token, txID) {
    const url = `${routeFactory.transaction(this.__addr)}/${txID}`;
    try {
      await axios.delete(url, {
        headers: { authorization: token },
      });
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async getAllTransactions(token, queries) {
    const url = `${routeFactory.transaction(this.__addr)}`;
    try {
      const response = await axios.get(url, {
        headers: { authorization: token },
        params: queries,
      });
      return response.data || response;
    } catch (err) {
      handleAPIErr(err);
    }
  }

  async postTransaction(token, txData) {
    const url = `${routeFactory.transaction(this.__addr)}`;
    try {
      await axios.post(url, txData, {
        headers: { authorization: token },
      });
    } catch (err) {
      handleAPIErr(err);
    }
  }
}

module.exports = Ledgerkeep;
