const {
  renderCreateNewLessonController,
} = require('../renderCreateNewLesson.controller');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

describe('renderCreateNewLesson Controller Test Suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate res.status & res.render are called', () => {
    const req = mockRequest();
    const res = mockResponse();

    req.user = expect.anything();

    renderCreateNewLessonController(req, res);

    const { status, render } = res;

    validateMockValueToHaveBeenCalled(status);
    validateMockValueToHaveBeenCalled(render);
  });
});
