import api from "./Communication/Api";
import { FILE_UPLOADED } from './Events';
import * as Messages from './Communication/Messages';
import { wait } from '../../util/helpers';

let bufferNewFile = false;

export const getFileList = async () => {
    const response = await api.get('/upload?path=%2F&action=list');
    return response?.files || [];
};

export const getFile = async filename => {
    const data = await api.get(`/sd/${encodeURI(filename)}`);
    return {
        name: filename,
        data,
    };
};

export const deleteFile = async filename => {
    bufferNewFile = true;

    await api.get(`/upload?path=%2F&filename=${encodeURI(filename)}&action=delete`);
    await wait(2000);

    bufferNewFile = false;
};

export const deleteAllFiles = async files => {
    bufferNewFile = true;

    for (const file of files) {
        await deleteFile(file.name);
    }

    await wait(2000);
    bufferNewFile = false;
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

export const hasNewFile = message => {
    return !bufferNewFile &&
        message?.type === Messages.MessageType.INFO &&
        message.value?.includes(FILE_UPLOADED);
};
