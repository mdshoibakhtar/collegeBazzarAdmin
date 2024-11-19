import React from 'react'
import { ToastContainer } from 'react-toastify';
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

function AddProduct() {

    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="tbl-caption tbl-caption-2 p-2">
                    <h4 className="heading mb-0"><b>Add New Product</b></h4>
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
        </>
    )
}

export default AddProduct