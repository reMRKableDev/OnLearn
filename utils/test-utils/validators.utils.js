exports.validateNotEmpty = (received) => {
  expect(received).not.toBeNull();
  expect(received).not.toBeUndefined();
  expect(received).toBeTruthy();
};

exports.validateUndefined = (received) => {
  expect(received).toBeUndefined();
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

exports.validateMockValueToHaveBeenCalled = (mockValue) => {
  expect(mockValue).not.toHaveBeenCalledTimes(100);
  expect(mockValue).toHaveBeenCalled();
};

exports.validateControllerUsed = (received, controller) => {
  expect(received).not.toBe(() => 'dummy');
  expect(received).toBe(controller);
};

exports.validateObjectMatch = (received, expected) => {
  expect(received).not.toMatchObject({ dfsdaf: 905 });
  expect(received).toMatchObject(expected);
};

exports.validateMongoDuplicationError = (name, code) => {
  expect(name).not.toEqual(/dummy/i);
  expect(name).toEqual('MongoError');
  expect(code).not.toBe(255);
  expect(code).toBe(11000);
};

exports.validateMongoValidatorError = (name, message) => {
  expect(name).not.toEqual(/dummy/i);
  expect(name).toEqual('ValidatorError');

  const expectedMessages = [
    'Username is required.',
    'Email is required.',
    'Password is required.',
  ];

  expect(expectedMessages).not.toContain('bla bla bla');
  expect(expectedMessages).toContain(message);
};

exports.validateTypeOfFunction = (received) => {
  expect(typeof received).not.toBe('number');
  expect(typeof received).toBe('function');
};

exports.validateTypeOfString = (received) => {
  expect(typeof received).not.toBe('number');
  expect(typeof received).toBe('string');
};
