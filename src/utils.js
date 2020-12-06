const routeFactory = {
  category: (addr) => `${addr}/api/userAccess/category`,
  transaction: (addr) => `${addr}/api/userAccess/transaction`,
};

function handleAPIErr(err) {
  const customCode = getCustomCode(err);
  if (!customCode) {
    console.warn("Unexpected error in Ledgerkeep API call:", err.message);
    throw err;
  }

  throw new Error(customCode);
}

function getCustomCode(err) {
  return err && err.response && err.response.data && err.response.data.customCode;
}

module.exports = { routeFactory, handleAPIErr };
