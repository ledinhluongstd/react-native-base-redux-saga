const getRootData = require('../Fixtures/root.json');
const getRateData = require('../Fixtures/rateLimit.json');
const gantmanData = require('../Fixtures/gantman.json');
const skellockData = require('../Fixtures/skellock.json');

export default {
  // Functions return fixtures
  getRoot: () => ({
    ok: true,
    data: getRootData,
  }),
  getRate: () => ({
    ok: true,
    data: getRateData,
  }),
  getUser: username =>
    // This fixture only supports gantman or else returns skellock
    ({
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData,
    }),
};
