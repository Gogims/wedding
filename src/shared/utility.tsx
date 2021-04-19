import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Utility {
    IsDesktop: () => boolean;
    toBase64Async: (file: File) => Promise<string>;
    getCleanTag: (hashtag: string) => string;
};

const utility: Utility = {
    IsDesktop: () => useMediaQuery('(min-width:960px)'),
    toBase64Async: (file: File) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result?.toString();

            if (!!result) {
                let encoded = result.replace(/^data:(.*,)?/, '');

                if ((encoded.length % 4) > 0) {
                    encoded += '='.repeat(4 - (encoded.length % 4));
                }

                resolve(encoded);
            }
        };
        reader.onerror = error => reject(error);
    }),
    getCleanTag: (hashtag: string) => {
        const trimmedTag = hashtag.trim();

        return trimmedTag.startsWith('#') ? 
            trimmedTag.substring(1) : 
            trimmedTag;
    }
};

export default utility;