export const asyncGetCount = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
};
