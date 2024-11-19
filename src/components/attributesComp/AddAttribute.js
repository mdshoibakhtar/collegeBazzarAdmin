import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { clodinaryImage, languageList } from '../../api/login/Login';
import { baseUrlImage } from '../../baseUrl';
import Loadar from '../../common/loader/Loader';

function AddAttribute() {
    const [val, setVal] = useState([]);
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const getLang = async () => {
        const res = await languageList();
        setData(res.data);
        const mapped = res.data.map((item) => ({
            name: '',
            language_id: item._id,
            approve: false,
            label: item.name,
        }));
        setVal(mapped);
    };

    useEffect(() => {
        getLang();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (index, field, value) => {
        setVal((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };

    const handleSubmit = (event, index) => {
        event.preventDefault();
        console.log('Submitted Data:', val);
    };

    const [load , setLoad] = useState(false)
    const handleChangeImage = async (index, field, file) => {
        setLoad(true)
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await clodinaryImage(formData); // Assuming `clodinaryImage` handles the image upload
            const imageUrl = res?.data?.data?.url;

            // Update the specific item's image field in val
            setTimeout(() => {
                setLoad(false)
                setVal((prev) =>
                    prev.map((item, i) =>
                        i === index ? { ...item, [field]: imageUrl } : item
                    )
                );
            }, 1000);
        } catch (error) {
            console.error('Image upload failed', error);
        }
    };

    return (
        <>
            <div className="row m-4">
                {load && <Loadar/>}
                <div className="col-xl-12" style={{ padding: '0' }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0" style={{ padding: '10px' }}>
                                        <b>Add New Attribute</b>
                                        <small
                                            style={{ textTransform: 'capitalize', marginLeft: '5px' }}
                                        >
                                            Control panel
                                        </small>
                                    </h4>
                                </div>

                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value.toString()}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList
                                                onChange={handleChange}
                                                aria-label="lab API tabs example"
                                            >
                                                {data &&
                                                    data.map((item, i) => (
                                                        <Tab key={i} label={item?.name} value={i.toString()} />
                                                    ))}
                                            </TabList>
                                        </Box>
                                        {val &&
                                            val.map((item, i) => (
                                                <TabPanel key={i} value={i.toString()}>
                                                    <form
                                                        className="row cusforms mt-3"
                                                        style={{ padding: '0 20px' }}
                                                        onSubmit={(e) => handleSubmit(e, i)}
                                                    >
                                                        <div className="form-group col-10">
                                                            <label htmlFor={`name-${i}`}>Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Attribute Name"
                                                                id={`name-${i}`}
                                                                value={item.name}
                                                                onChange={(e) =>
                                                                    handleInputChange(i, 'name', e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor={`image-${i}`}>Image</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                id={`image-${i}`}
                                                                onChange={(e) =>
                                                                    handleChangeImage(i, 'image', e.target.files[0])
                                                                }
                                                            />
                                                            {item.image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${item.image}`} />}
                                                        </div>


                                                        <div className="form-group col-3">
                                                            <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                                                <label
                                                                    className="form-check-label me-2"
                                                                    htmlFor={`approve-${i}`}
                                                                >
                                                                    Approve This Language
                                                                </label>
                                                                <input
                                                                    style={{
                                                                        marginLeft: '80px',
                                                                        border: '1px solid black',
                                                                    }}
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id={`approve-${i}`}
                                                                    checked={item.approve}
                                                                    onChange={(e) =>
                                                                        handleInputChange(i, 'approve', e.target.checked)
                                                                    }
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-12 mt-3">
                                                            <button
                                                                type="button"
                                                                className="btn btn-warning float-end"
                                                                onClick={() =>
                                                                    handleInputChange(i, 'name', '')
                                                                }
                                                            >
                                                                RESET
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary float-end"
                                                            >
                                                                SAVE
                                                            </button>
                                                        </div>
                                                    </form>
                                                </TabPanel>
                                            ))}
                                    </TabContext>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddAttribute;
