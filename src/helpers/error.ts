/**
 * @desc Formats and throws a new Error
 */
function throwError (action: string, description: string): never {
    throw new Error(`[${action}] : ${description}`);
}

export default {
    throwError,
}