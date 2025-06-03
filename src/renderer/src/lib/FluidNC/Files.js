import api from "./Communication/Api";
import { FILE_UPLOADED } from './Events';
import * as Messages from './Communication/Messages';

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
    return api.get(`/upload?path=%2F&filename=${encodeURI(filename)}&action=delete`);
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
    return message?.type === Messages.MessageType.INFO && message.value?.includes(FILE_UPLOADED);
};
