export interface ImageUploadPluginProp {
    uploadHandler: (file: File) => Promise<AsyncImageUploadPromise>
}

export interface AsyncImageUploadPromise {
    default: string // image url
}

const imageUploadPlugin = ({uploadHandler}: ImageUploadPluginProp) => {

    const uploadAdapter = (loader) => {
        return {
            upload: () => {
                return loader.file.then((file) => {
                    // async image Upload ( ex: api call )
                    return uploadHandler(file);
                });
            },
        };
    };

    return (editor) => {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }
};

export default imageUploadPlugin