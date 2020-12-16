module.exports = {
  mockRequest: () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.login = jest.fn().mockReturnValue(req);
    req.flash = jest.fn().mockReturnValue(req);
    return req;
  },

  mockErrorRequest: () => {
    const req = {};
    req.body = {
      role: 'student',
      firstName: '',
      lastName: '',
      email: '@',
      username: '',
      password: '',
      password2: '',
    };
    return req;
  },

  mockResponse: () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.render = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.redirect = jest.fn().mockReturnValue(res);
    return res;
  },

  mockServer: () => {
    const server = {};
    server.listen = jest.fn();
    return server;
  },
};
