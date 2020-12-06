exports.validateNotEmpty = (received) => {
  expect(received).not.toBeNull();
  expect(received).not.toBeUndefined();
  expect(received).not.toBeFalsy();
};

exports.validateStringEquality = (received, expected) => {
  expect(received).not.toEqual('dummy');
  expect(received).toEqual(expected);
};

exports.validateArrayLength = (received, expected) => {
  expect(received).not.toHaveLength(10000000000);
  expect(received).toHaveLength(expected);
};

exports.validateArrayContaining = (received, expected) => {
  expect(received).not.toEqual(expect.arrayContaining(['dummyData']));
  expect(received).toEqual(expect.arrayContaining(expected));
};

exports.validateMockResponseStatusToHaveBeenCalled = (mockStatus) => {
  expect(mockStatus).not.toHaveBeenCalledTimes(100);
  expect(mockStatus).toHaveBeenCalled();
};

exports.validateMockResponseRenderToHaveBeenCalled = (mockRender) => {
  expect(mockRender).not.toHaveBeenCalledTimes(100);
  expect(mockRender).toHaveBeenCalled();
};

exports.validateMockResponseSendToHaveBeenCalled = (mockSend) => {
  expect(mockSend).not.toHaveBeenCalledTimes(100);
  expect(mockSend).toHaveBeenCalled();
};

exports.validateControllerUsed = (received, controller) => {
  expect(received).not.toBe(() => 'dummy');
  expect(received).toBe(controller);
};
