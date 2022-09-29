type IFormData = {
    [key: string]: string | Blob | number;
};


export const createFormData = <T extends object = IFormData>(datas: T, ignoreKeys?: string[]) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(datas)) {
        if (!value || typeof value === 'object' || ignoreKeys?.includes(key)) {
            continue;
        }
        if (typeof value === 'number') {
            formData.append(key, String(value));
        } else {
            formData.append(key, value);
        }
    }
    return formData;
};

/**
 * byte 용량을 환산하여 반환
 * 용량의 크기에 따라 MB, KB, byte 단위로 환산함
 * @param fileSize  byte 값
 * @param fixed     환산된 용량의 소수점 자릿수
 * @returns {String}
 */
export const toByte = (fileSize: number, fixed = 2) => {
    let str;

    //MB 단위 이상일때 MB 단위로 환산
    if (fileSize >= 1024 * 1024) {
        const customFileSize = (fileSize / (1024 * 1024)).toFixed(fixed);
        str = customFileSize + ' MB';
    }
    //KB 단위 이상일때 KB 단위로 환산
    else if (fileSize >= 1024) {
        const customFileSize = (fileSize / 1024).toFixed(fixed);
        str = customFileSize + ' KB';
    }
    //KB 단위보다 작을때 byte 단위로 환산
    else {
        const customFileSize = fileSize.toFixed(fixed);
        str = customFileSize + ' byte';
    }
    return str;
};

export const toQueryString = <T extends object = {}>(payload: T): string => {
    return (
        '?' +
        Object.entries(payload)
            .map((e) => e.join('='))
            .join('&')
    );
};

export const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
};

export const formatDate = (date: Date) => {
    return (
        [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-') +
        ' ' +
        [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds())].join(':')
    );
};