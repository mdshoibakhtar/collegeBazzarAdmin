import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { baseproductUrl } from '../../baseUrl';
import { languageList } from '../../api/login/Login';
import Loadar from '../../common/loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AddColor() {
    const [val, setVal] = useState([]);
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const getLang = async () => {
        const res = await languageList(); // Assuming `languageList` fetches the language data
        setData(res.data);

        const mapped = res.data.map((item) => ({
            name: '', color_code: ''
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
    const [load, setLoad] = useState(false)
    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };
    const params = useParams()
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoad(true)
        console.log('Submitted Data:', val);
        try {
            const res = await axios.post(`${baseproductUrl}brand/add`, { list: val }, {

                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
                },
            });
            toastSuccessMessage(params?.id ? "Updated successfully" : "Added successfully");
            
        } catch (error) {
            
        }
        setLoad(false)
    };

    return (
        <>
            {load && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Add New Color</b>  <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                </div>

                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                {data &&
                                                    data.map((item, i) => (
                                                        <Tab key={i} label={item?.name} value={i} />
                                                    ))}
                                            </TabList>
                                        </Box>
                                        {val &&
                                            val.map((item, i) => (
                                                <TabPanel key={i} value={i}>
                                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Color Name'
                                                                id="fromDate"
                                                                onChange={(e) =>
                                                                    handleInputChange(i, 'name', e.target.value)
                                                                }
                                                            />
                                                        </div>


                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Color Code</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Color Code'
                                                                id="fromDate"
                                                                onChange={(e) =>
                                                                    handleInputChange(i, 'color_code', e.target.value)
                                                                }
                                                            />
                                                        </div>

                                                        <div className="form-group col-12 mt-3">
                                                            <button type="button" className="btn btn-warning float-end" >
                                                                RESET
                                                            </button>
                                                            <button type="button"
                                                                onClick={handleSubmit}
                                                                className="btn btn-primary float-end">
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
    )
}

export default AddColor