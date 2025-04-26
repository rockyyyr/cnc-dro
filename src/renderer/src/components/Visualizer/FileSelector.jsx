import { useState, useEffect } from 'react';
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
                // borderLeft: 'none',
                // borderRight: 'none',
                height: 50,
                width: '100%',
                border: 'none',
                justifyContent: 'flex-start',
            }} />
    );
};

export default function FileSelector({ show, onClose, onChange }) {
    const [files, setFiles] = useState([]);

    const selectFile = file => {
        onChange(file);
        onClose();
    };

    useEffect(() => {
        const getFiles = async () => {
            const files = await Files.getFileList();
            if (files.length > 0) {
                setFiles(files);
            }
        };
        getFiles();
    }, []);

    return (
        <Modal
            show={show}
            onClose={onClose}
        >
            <Grid x={4} y={5} style={{ justifyContent: 'flex-start', alignItems: 'start', overflow: 'hidden' }}>
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
            </Grid>
        </Modal>
    );
}