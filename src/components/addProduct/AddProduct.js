import React, { useState, useEffect } from 'react';
import 'react-tagsinput/react-tagsinput.css';
import ProductVedioSec from './ProductVedioSec';
import SeoSection from './SeoSection';
import DescriptionSec from './DescriptionSec';
import ShippingConfiguration from './ShippingConfiguration';
import LowStockQtyWarning from './LowStockQtyWarning';
import StockVisibilityState from './StockVisibilityState';
import CashOnDelivery from './CashOnDelivery';
import FeaturedSec from './FeaturedSec';
import TodaysDealSec from './TodaysDealSec';
import TrendingSection from './TrendingSection';
import FlashDealSec from './FlashDealSec';
import BottomSec from './BottomSec';
import ProductInformation from './ProductInformation';
import VariationSec from './VariationSec';
import ProductPriceAndStock from './ProductPriceAndStock';
import './AddProduct.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { baseproductUrl } from '../../baseUrl';
import { clodinaryImage, getunitId, languageList } from '../../api/login/Login';
import Loadar from '../../common/loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function AddProduct() {
    const [val, setVal] = useState([]);
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const getLang = async () => {
        const res = await languageList(); // Assuming `languageList` fetches the language data
        setData(res.data);

        const mapped = res.data.map((item) => ({
            name: '',
            image: null,
            meta_title: '',
            meta_description: '',
            language_id: item._id,
            label: item.name,
        }));
        if (params?.uid) {
            getDataId()
        } else {
            setVal(mapped);
        }
    };

    const params = useParams()
    useEffect(() => {
        getLang();
    }, [params?.uid]);

    const getDataId = async () => {
        // const res = await getunitId(params?.uid)
        // console.log(res);
        // setVal(res.data)
    }

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

    return (
        <>
            <ToastContainer />
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
                            <TabPanel key={i} value={i} style={{padding:"0"}}>
                                <form className="row cusforms mt-3">

                                    <section className="ListDistributer mx-4 expdf ">
                                        <div className="tbl-caption tbl-caption-2 p-2">
                                            <h4 className="heading mb-0" style={{padding:"10"}}><b>Add New Product</b></h4>
                                        </div>

                                        <div className="row m-4">
                                            <div className="col-xl-7 me-5" style={{ padding: "0" }}>
                                                <ProductInformation />
                                                <ProductVedioSec />
                                                <SeoSection />
                                            </div>
                                            <div className="col-xl-4" style={{ padding: "0" }}>
                                                <ShippingConfiguration />
                                                <LowStockQtyWarning />
                                                <StockVisibilityState />
                                                <CashOnDelivery />
                                                <FeaturedSec />
                                                <TodaysDealSec />
                                                <TrendingSection />
                                                <FlashDealSec />
                                            </div>
                                        </div>
                                        <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                <DescriptionSec />
                                            </div>
                                        </div>
                                        <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                <VariationSec />
                                            </div>
                                        </div>
                                        <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                <ProductPriceAndStock />
                                            </div>
                                        </div>
                                        <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                <BottomSec />
                                            </div>
                                            <div className="form-group col-12 mt-3">
                                                <button type="button" className="btn btn-primary float-end">
                                                    Add Product
                                                </button>
                                                <button type="button" className="btn btn-warning float-end">
                                                    RESET
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </TabPanel>
                        ))}
                </TabContext>
            </Box>

        </>
    )
}

export default AddProduct