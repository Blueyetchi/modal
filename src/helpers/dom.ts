function parsedContent (content: string, injectedData: object) {
    const data = injectedData;

    return eval('`' + content + '`');
}

export default {
    parsedContent,
}