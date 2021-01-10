const { mockRequest, mockResponse } = require('./interceptors.utils');

const setupReqRes = () => {
  const request = mockRequest();
  const response = mockResponse();

  request.user = {
    local: expect.anything(),
  };

  return { request, response };
};

const clearMocks = () => jest.clearAllMocks();

module.exports = {
  setupReqRes,
  clearMocks,
};
