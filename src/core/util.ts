export const buildUrl = (...args: string[]) => {
    return [...args].join('/');
};