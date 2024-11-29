import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;
export default function Train({ countryData, locations, preference, handleInputChangeTrain, rowsTrain, setRowsTrain, AddRowTrain }) {
    const removeRow = (index) => {
        setRowsTrain(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Train</h4>
                </div>
            </div>
            {rowsTrain.map((row, index) =>
                <div className="row">
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country </label>
                            <select
                                className="form-select shadow"
                                name="country"
                                value={row.country}
                                onChange={(e) => handleInputChangeTrain(index, "country", e.target.value)}
                            >
                                <option selected>Open Select Country</option>
                                {countryData && countryData?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">From City  <span className="text-danger fs-5">*</span></label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.from}
                                onChange={(value) => handleInputChangeTrain(index, "from", value)}
                            >
                                {locations?.map((loc) => (
                                    <Option key={loc._id} value={loc._id}>
                                        {loc.city_name}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">To City  <span className="text-danger fs-5">*</span></label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.to}
                                onChange={(value) => handleInputChangeTrain(index, "to", value)}
                            >
                                {locations?.map((loc) => (
                                    <Option key={loc._id} value={loc._id}>
                                        {loc.city_name}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Departure  <span className="text-danger fs-5">*</span></label>
                            <input type="date" className="form-control" placeholder="Departure"
                                name="departure"
                                value={row.departure}
                                onChange={(e) => handleInputChangeTrain(index, "departure", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Return</label>
                            <input type="date" className="form-control" placeholder="Departure"
                                name="return"
                                value={row.return}
                                onChange={(e) => handleInputChangeTrain(index, "return", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Preference</label>
                            <div className="w-100">
                                <select
                                    className="form-select shadow"
                                    name="preference"
                                    value={row.preference}
                                    onChange={(e) => handleInputChangeTrain(index, "preference", e.target.value)}
                                >
                                    <option selected>Open Select Country</option>
                                    {preference && preference?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Remark</label>
                            <div className="w-100">
                                <textarea className="form-control" placeholder="Remark" style={{ height: "100px" }}
                                    name="remark"
                                    value={row.remark}
                                    onChange={(e) => handleInputChangeTrain(index, "remark", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowTrain}> + Add more</button>
            </div>
        </div>
    )
}