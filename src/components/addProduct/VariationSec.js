import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import TagsInput from 'react-tagsinput';

function VariationSec() {
    const [tags, setTags] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);
    const options = [
        { name: 'Category 1', id: 1 },
        { name: 'Category 2', id: 2 },
        { name: 'Category 3', id: 3 },
        { name: 'Category 4', id: 4 }
    ];
    const onSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
    };
    const onRemove = (selectedList, removedItem) => {
        setSelectedValues(selectedList);
    };

    const handleTagsChange = (newTags) => {
        setTags(newTags); // Update the tags state with the new tags
    };


    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <h3 style={{ color: '#231f1fa1' }}>Variation</h3>
                            <hr />

                            <div className="form-group col-6 mt-2">
                                <label htmlFor="fromDate">Attributes:</label>
                                <Multiselect
                                    options={options}
                                    selectedValues={selectedValues}
                                    onSelect={onSelect}
                                    onRemove={onRemove}
                                    displayValue="name"
                                    placeholder="Select options"
                                    style={{
                                        chips: { BiFontSize: '15px' },
                                        searchBox: { padding: '0 8px' }
                                    }}
                                />
                            </div>

                            <div className='row p-0 mt-5'>
                                <div className="form-group col-4">
                                    <input
                                        style={{ height: '55px' }}
                                        type="text"
                                        className="form-control mt-0"
                                        placeholder='attribute'
                                        id="fromDate"
                                        disabled
                                    />
                                </div>
                                <div className="form-group col-8">
                                    <TagsInput value={tags} onChange={handleTagsChange} />
                                </div>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VariationSec