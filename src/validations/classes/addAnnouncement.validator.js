import { check, validationResult } from 'express-validator';

/**
 *Contains AddAnnouncementValidator Validator
 *
 *
 *
 * @class AddAnnouncementValidator
 */
class AddAnnouncementValidator {
  /**
   * validate AddAnnouncement data.
   * @memberof AddAnnouncementValidator
   * @returns {null} - No response.
   */
  static validateData() {
    return [
      check('text')
        .exists()
        .withMessage('text is required')
        .not()
        .isEmpty()
        .withMessage('text cannot be empty')
        .isString()
        .withMessage('text should be a String'),
    ];
  }

  /**
   * Validate class data.
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @param {Response} next - The next parameter.
   * @memberof AddAnnouncementValidator
   * @returns {JSON} - A JSON success response.
   */
  static async myValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errArr = errors.array().map(({ msg }) => msg);
      return res.status(400).json({
        status: '400 Invalid Request',
        error: 'Your request contains invalid parameters',
        errors: errArr,
      });
    }
    return next();
  }
}
export default AddAnnouncementValidator;
