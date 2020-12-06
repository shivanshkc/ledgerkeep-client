class Ledgerkeep {
  constructor(addr) {
    this.__addr = addr;
  }

  async getCategoryCount(token) {}

  async putCategory(token, categoryName) {}

  async delCategory(token, categoryName) {}

  async getAllCategories(token, sortBy) {}

  async getTransactionCount(token, queries) {}

  async getTransactionSum(token, queries) {}

  async getTransactionByID(token, txID) {}

  async patchTransactionByID(token, txID, updates) {}

  async delTransactionByID(token, txID) {}

  async getAllTransactions(token, queries) {}

  async postTransaction(token, txData) {}
}

module.exports = Ledgerkeep;
