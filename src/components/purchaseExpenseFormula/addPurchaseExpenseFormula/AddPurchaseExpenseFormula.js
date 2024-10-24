import React from "react";

export const AddPurchaseExpenseFormula = () => {
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
              <div className="col-12">
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
            </div>

            <div className="row">
              <div className="col-12 col-lg-3 ">
                <label for="exampleInputEmail1" className="form-label">
                  A/C Effect
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
                  Type
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
                  Add/Deduct
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
                  Tex Type
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

            <div className="row">
              <div className="col-12 col-lg-4">
                <span>Calculation</span>
                <br />
                <label for="exampleInputEmail1" className="form-label">
                  Itermwise
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
              <div className="col-12 col-lg-4">
                <span>Type</span>
                <br />
                <label for="exampleInputEmail1" className="form-label">
                  Fixed
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
              <div className="col-12 col-lg-4 mt-4">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    @ %
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-12 col-lg-4">
                <span>Calculation Based On </span>
                <br />
                <label for="exampleInputEmail1" className="form-label">
                  On Amount
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
              <div className="col-12 col-lg-4">
                <span>Type</span>
                <br />
                <label for="exampleInputEmail1" className="form-label">
                  Fixed
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
              <div className="col-12 col-lg-4 mt-0 mt-lg-4">
                <label for="exampleInputEmail1" className="form-label">
                  Expense Name
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

            <div>
              <label for="exampleInputEmail1" className="form-label">
                Expense Account
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
            <div className="d-flex flex-col">
                <span>Column</span>
                <span>Uniq Column Name</span>
            </div>

            <div className="text-end">
              <button type="button" className="btn btn-primary">
                Save
              </button>
              <button type="button" className="btn btn-primary">
                Save & Close
              </button>
              <button type="button" className="btn btn-primary">
                Cencel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
