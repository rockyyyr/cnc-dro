/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../lib/FluidNC';
import Modal from '../util/Modal';
import * as ProdFiles from '../lib/FluidNC/Files';
import * as DevFiles from '../lib/FluidNC/DevFiles';
import Button from './Button';

const Files = window.env.NODE_ENV === 'development'
    ? DevFiles
    : ProdFiles;

import '../assets/file-selector.css';
import Delete from '../assets/img/cancel.svg';

export default function FileSelector({ show, onClose, onChange, onFilesLoaded }) {
    const [files, setFiles] = useState([]);
    const { message } = useContext(Context);

    const selectFile = async file => {
        const { data } = await Files.getFile(file.name);
        file.data = data;
        onChange(file);
        onClose();
    };

    const deleteFile = async file => {
        if (window.confirm(`Are you sure you want to delete ${file.name}?`)) {
            await Files.deleteFile(file.name);
            setFiles(files.filter(f => f.name !== file.name));
        }
    };

    const getFiles = async () => {
        const files = await Files.getFileList();
        if (files.length > 0) {
            setFiles(files);
            onFilesLoaded(files);
        }
    };

    const deleteAllFiles = async files => {
        if (window.confirm(`Are you sure you want to delete all files?`)) {
            for (const file of files) {
                await Files.deleteFile(file.name);
            }
            setFiles([]);
        }
    };

    useEffect(() => {
        if (Files.hasNewFile(message)) {
            getFiles();
        }
    }, [message]);

    useEffect(() => {
        getFiles();
    }, []);

    return (
        <Modal
            show={show}
            onClose={onClose}
        >
            <div style={{ justifyContent: 'flex-start', alignItems: 'start', overflow: 'hidden', padding: 5 }}>
                <div className="file-selector" style={{ width: 400, maxHeight: 500, overflowY: 'auto' }}>
                    <div className='flex-row space-between' style={{ alignItems: 'center', marginBottom: 20, borderBottom: '1px solid lightgrey' }}>
                        <h2 style={{ paddingLeft: 10 }}>Files</h2>
                        <Button
                            icon={Delete}
                            invertIcon={true}
                            iconSize={30}
                            bufferClick
                            onClick={() => deleteAllFiles(files)}
                            style={{
                                width: 50,
                                height: 50,
                                border: 'none',
                                background: 'none',
                                borderRadius: 0,
                            }} />
                    </div>

                    <table>
                        <tbody>
                            {files.map((file, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className='flex-row flex-center'>
                                            <Button
                                                outline
                                                bufferClick
                                                label={file.name}
                                                labelSize='xs'
                                                onClick={() => selectFile(file)}
                                                style={{
                                                    height: 50,
                                                    width: '100%',
                                                    border: 'none',
                                                    justifyContent: 'flex-start',
                                                    textAlign: 'left',
                                                }} />
                                            <Button
                                                icon={Delete}
                                                invertIcon={true}
                                                iconSize={30}
                                                bufferClick
                                                onClick={() => deleteFile(file)}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    border: 'none',
                                                    background: 'none',
                                                    borderRadius: 0,
                                                }} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </Modal>
    );
}