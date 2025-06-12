const modules = import.meta.glob('../../test/*.{gcode,nc}', { eager: true });

const files = Object.entries(modules).map(([path]) => ({ name: path.replace('../../test/', '') }));

export const getFileList = async () => {
    return files;
};

export const getFile = async filename => {
    const data = await fetch(`http://localhost:5173/src/test/${filename}`).then(response => response.text());
    return {
        name: filename,
        data
    };
};

export const deleteFile = async () => {
    return false;
};

export const getLatestFile = async () => {
    const files = await getFileList();

    if (files.length === 0) {
        return null;
    }

    const latestFile = files[files.length - 1]?.name;

    if (!latestFile) {
        return null;
    }

    return getFile(latestFile);
};

export const hasNewFile = () => {
    return false;
};
