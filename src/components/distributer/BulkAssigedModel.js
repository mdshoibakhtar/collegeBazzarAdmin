import chroma from 'chroma-js';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : undefined,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? data.color
                        : color.alpha(0.3).css()
                    : undefined,
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

function BulkAssigedModel(props) {
    const [relateData, setRelateData] = useState([
        { value: 1, label: 'Staff 1', color: '#f50' },
        { value: 2, label: 'B', color: '#0f5' },
        { value: 3, label: 'C', color: '#50f' },
    ]);
    const handleChange22 = (selectedOption) => {

    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bulk Assigned
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Select Staff</h4>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={relateData}
                    styles={colourStyles}
                    onChange={handleChange22}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    // onClick={props.onHide}
                >Send</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BulkAssigedModel