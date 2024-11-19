import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { BiFontSize } from 'react-icons/bi';
import TagsInput from 'react-tagsinput';

function ProductInformation() {
    const [tags, setTags] = useState([]);
    const options = [
        { name: 'Category 1', id: 1 },
        { name: 'Category 2', id: 2 },
        { name: 'Category 3', id: 3 },
        { name: 'Category 4', id: 4 }
    ];
    const options2 = [
        { name: 'Attribute 1', id: 1 },
        { name: 'Attribute 2', id: 2 },
        { name: 'Attribute 3', id: 3 },
        { name: 'Attribute 4', id: 4 }
    ];
    const options1 = [
        { name: 'Industry 1', id: 1 },
        { name: 'Industry 2', id: 2 },
        { name: 'Industry 3', id: 3 },
        { name: 'Industry 4', id: 4 }
    ];
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const [selectedProdAttribute, setSelectedProdAttribute] = useState([]);
    const onSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
    };
    const onRemove = (selectedList, removedItem) => {
        setSelectedValues(selectedList);
    };
    const onSelectIndustry = (selectedList, selectedItem) => {
        setSelectedIndustry(selectedList);
    };
    const onRemoveIndustry = (selectedList, removedItem) => {
        setSelectedIndustry(selectedList);
    };
    const onSelectProdAttribute = (selectedList, selectedItem) => {
        setSelectedProdAttribute(selectedList);
    };
    const onRemoveProdAttribute = (selectedList, removedItem) => {
        setSelectedProdAttribute(selectedList);
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

                            <h3 style={{ color: '#231f1fa1' }}>Product Information</h3>
                            <hr />

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Product Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Product Name '
                                    id="fromDate"
                                />
                            </div>

                            <div className="form-group col-12 mt-2" >
                                <label htmlFor="fromDate">Category </label>
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

                            <div className="form-group col-12 mt-2" >
                                <label htmlFor="fromDate">Industry </label>
                                <Multiselect
                                    options={options1}
                                    selectedValues={selectedIndustry}
                                    onSelect={onSelectIndustry}
                                    onRemove={onRemoveIndustry}
                                    displayValue="name"
                                    placeholder="Select options"
                                    style={{
                                        chips: { BiFontSize: '15px' },
                                        searchBox: { padding: '0 8px' }
                                    }}
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Seller</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option selected>Select Seller</option>
                                    <option value={11}>One</option>
                                    <option value={21}>Two</option>
                                    <option value={11}>Three</option>
                                </select>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Brand</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option selected>Select Brand</option>
                                    <option value={111}>One</option>
                                    <option value={211}>Two</option>
                                    <option value={311}>Three</option>
                                </select>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Unit</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option selected>Select Unit</option>
                                    <option value={1111}>One</option>
                                    <option value={2111}>Two</option>
                                    <option value={3111}>Three</option>
                                </select>
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Weight</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Weight'
                                    id="fromDate"
                                />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Minimum Purchase Qty</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder='Enter Minimum Purchase Qty'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Tags</label>
                                <TagsInput value={tags} onChange={handleTagsChange} />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Barcode</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Barcode'
                                    id="fromDate"
                                />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Gallary Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder='Enter Gallary Image'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Thumbnail  Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder='Enter Thumbnail  Image'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2" >
                                <label htmlFor="fromDate">Product Attribute </label>
                                <Multiselect
                                    options={options2}
                                    selectedValues={selectedProdAttribute}
                                    onSelect={onSelectProdAttribute}
                                    onRemove={onRemoveProdAttribute}
                                    displayValue="name"
                                    placeholder="Select options"
                                    style={{
                                        chips: { BiFontSize: '15px' },
                                        searchBox: { padding: '0 8px' }
                                    }}
                                />
                            </div>

                            <div className="form-group col-7 mt-4">
                                <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                    <label
                                        className="form-check-label me-2" // Add margin to separate label and switch
                                        htmlFor="flexSwitchCheckDefault"
                                    >
                                        Refundable
                                    </label>
                                    <input
                                        style={{ marginLeft: '80px', border: '1px solid black' }}
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                    />
                                </div>
                            </div>
                            <div className="form-group col-7 mt-1">
                                <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                    <label
                                        className="form-check-label me-2" // Add margin to separate label and switch
                                        htmlFor="flexSwitchCheckDefault"
                                    >
                                        Quotation
                                    </label>
                                    <input
                                        style={{ marginLeft: '80px', border: '1px solid black' }}
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInformation