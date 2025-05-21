/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../../lib/FluidNC';
import Modal from '../../util/Modal';
import Grid from '../../util/Grid';
import { Files } from '../../lib/FluidNC';
import Button from '../Button';

import '../../assets/file-selector.css';

const fileLine = (file, action) => {
    return (
        <Button outline
            label={file.name}
            labelSize='xs'
            onClick={() => action(file)}
            style={{
                height: 50,
                width: '100%',
                border: 'none',
                justifyContent: 'flex-start',
                textAlign: 'left',
            }} />
    );
};

export default function FileSelector({ show, onClose, onChange, onFilesLoaded }) {
    const [files, setFiles] = useState([]);
    const { message } = useContext(Context);

    const selectFile = file => {
        onChange(file);
        onClose();
    };

    const getFiles = async () => {
        const files = await Files.getFileList();
        if (files.length > 0) {
            setFiles(files);
            onFilesLoaded(files);
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
                <div className="file-selector">
                    <Grid x={4}>
                        <h2>Files</h2>
                    </Grid>
                    <table>
                        <tbody>
                            {files.map((file, i) => (
                                <tr key={i}>
                                    <td>
                                        {fileLine(file, selectFile)}
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