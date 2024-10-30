import { ToastContainer } from "react-toastify";
import { FaFileAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import FastTrack from "../../../common/fastTrack/FastTrack";

function ReminderSetup() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">
                      <FaFileAlt className="me-1 mb-1" />
                      Reminder Setup
                    </h4>

                    {/* <a href="" className="btn btn-primary btn-sm">
                      <IoSearch className="fs-3" />
                    </a> */}

                    <Button
                      variant="primary bg-primary"
                      onClick={() => setShow(true)}
                    >
                      <IoSearch className="fs-3" />
                    </Button>
                  </div>
                  <div>
                    <div className="mt-3 mb-3">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <span>
                              <b style={{ color: "black" }}>Reminder On</b>
                            </span>
                          </div>

                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />

                            <label
                              className="form-check-label "
                              htmlFor="flexCheckDefault"
                            >
                              Default checkbox
                            </label>
                          </div>

                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />

                            <label
                              className="form-check-label "
                              htmlFor="flexCheckDefault"
                            >
                              Anniversary
                            </label>
                          </div>

                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />

                            <label
                              className="form-check-label "
                              htmlFor="flexCheckDefault"
                            >
                              Reminder Days
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <span>
                              <b style={{ color: "black" }}>Before</b>
                            </span>
                          </div>

                          <div className="mb-3">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Days"
                            />
                          </div>

                          <div className="mb-3">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Days"
                            />
                          </div>

                          <div className="mb-3">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Days"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <span>
                              <b style={{ color: "black" }}>After</b>
                            </span>
                          </div>

                          <div className="mb-3">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Days"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-xl-8">
                          <div className="mb-5">
                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckDefault"
                              />

                              <label
                                className="form-check-label "
                                htmlFor="flexCheckDefault"
                              >
                                Due Payment SMS on Start up
                              </label>
                            </div>

                            <div className="mb-3">
                              <select name="" id="" className="form-select">
                                <option value="">SMS Template</option>
                              </select>
                            </div>
                          </div>

                          <div className="mb-">
                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckDefault"
                              />

                              <label
                                className="form-check-label "
                                htmlFor="flexCheckDefault"
                              >
                                Credit Days Reminder On Startup?
                              </label>
                            </div>

                            <div className="mb-3">
                              <select name="" id="" className="form-select">
                                <option value="">SMS Template</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end mt-4">
                          <button className="btn btn-primary me-2">Save</button>
                          <button className="btn btn-secondary">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="text-center" />

      <FastTrack show={show} setShow={setShow} />
    </>
  );
}
export default ReminderSetup;
