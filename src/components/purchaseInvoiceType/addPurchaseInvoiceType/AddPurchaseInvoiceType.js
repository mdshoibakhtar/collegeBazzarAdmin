import React from "react";

export const AddPurchaseInvoiceType = () => {
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <i className="fa-solid fa-plus"></i>
              <h3>Add Purchase Invoice Type</h3>
            </div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <form>
            <div className="row">
              <div className="col-12 col-lg-6 ">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <label for="exampleInputEmail1" className="form-label">
                  Abc New
                </label>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-6 ">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Form Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <label for="exampleInputEmail1" className="form-label">
                  Tex Master
                </label>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="d-flex align-items-center gap-5">
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-6">
                <span>Tax Calculation</span>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Itemwise
                  </label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-6">
              <span>Tax Type</span>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    GST
                  </label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
            <div className="col-12 col-lg-3 ">
                <label for="exampleInputEmail1" className="form-label">
                  Tex Master
                </label>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3 ">
                <label for="exampleInputEmail1" className="form-label">
                  Tex Master
                </label>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3 ">
                <label for="exampleInputEmail1" className="form-label">
                  Tex Master
                </label>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3 ">
                <label for="exampleInputEmail1" className="form-label">
                  Tex Master
                </label>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            
            <div className="text-end">
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-primary">Save & Close</button>
                <button type="button" className="btn btn-primary">Cencel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
