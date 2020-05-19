
import constants from "../constants";
import error from "./error";

/**
 * @desc Validator for variable of type function
 * @throws Error
 */
function isFunctionOrThrowError(variable: Function): void {
    if (!(variable instanceof Function)) {
        error.throwError(
            constants.error.ACTION_NAME.VALIDATOR_FUNCTION,
            `Variable ${variable} should be of type function`
        );
    }
}

export default {
    isFunctionOrThrowError,
}