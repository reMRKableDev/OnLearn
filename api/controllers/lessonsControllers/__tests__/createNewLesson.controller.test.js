const { createNewLessonController } = require('../index');
const { render500ErrorHelper } = require('../../helpers');
const {
  createNewLessonService,
} = require('../../../../database/services/modelServices/lessonServices');
const {
  findOneCourseService,
} = require('../../../../database/services/modelServices/courseServices');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');
const {
  mockRequest,
  mockResponse,
} = require('../../../../utils/test-utils/interceptors.utils');

jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/lessonServices');
jest.mock('../../../../database/services/modelServices/courseServices');

let req;
let res;

describe('createNewLesson Controller Test Suite', () => {
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();

    req.params = { id: expect.anything() };
    req.body = {
      topic: expect.anything(),
      content: expect.anything(),
      videoUrl: expect.anything(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should validate render500ErrorHelper is called when createNewLessonService returns an error ', async () => {
    createNewLessonService.mockReturnValueOnce(new Error());

    await createNewLessonController(req, res);

    validateMockValueToHaveBeenCalled(createNewLessonService);
    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate render500ErrorHelper is called when findOneCourse returns an error ', async () => {
    findOneCourseService.mockReturnValueOnce(new Error());

    await createNewLessonController(req, res);

    validateMockValueToHaveBeenCalled(findOneCourseService);
    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate res.redirect called ', async () => {
    createNewLessonService.mockImplementationOnce(() => ({
      _id: jest.fn(),
    }));
    findOneCourseService.mockImplementationOnce(() => ({
      lessons: [],
      save: jest.fn(),
    }));

    await createNewLessonController(req, res);

    validateMockValueToHaveBeenCalled(createNewLessonService);
    validateMockValueToHaveBeenCalled(findOneCourseService);

    const { redirect } = res;
    validateMockValueToHaveBeenCalled(redirect);
  });
});
