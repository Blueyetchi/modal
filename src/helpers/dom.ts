/**
 * @desc Parsed variables injected in the content of the modal's template
 */
function parsedContent (content: string, injectedData: object): string {
    const data = injectedData;

    return eval('`' + content + '`');
}

export default {
    parsedContent,
}