class Ledgerkeep {
  constructor(addr) {
    this.__addr = addr;
  }

  async getCategoryCount() {}

  async putCategory() {}

  async delCategory() {}

  async getAllCategories() {}

  async getTransactionCount() {}

  async getTransactionSum() {}

  async getTransactionByID() {}

  async patchTransactionByID() {}

  async delTransactionByID() {}

  async getAllTransactions() {}

  async postTransaction() {}
}

module.exports = Ledgerkeep;
