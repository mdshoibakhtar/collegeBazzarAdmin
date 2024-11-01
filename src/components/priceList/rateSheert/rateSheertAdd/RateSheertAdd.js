import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { Button, Col, Form, Row } from "react-bootstrap";

const RateSheertAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Account Master",
        title_2: 'Add Rate Sheet',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="py-3">
                <Form className="m-3">
                    <Row className="mb-3 ">
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Sheet Name : </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name :"
                                required
                                name="date"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Date.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Status: </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name="voucher_type"
                            >
                                <option>Select Status</option>
                                <option value="1">Active</option>
                                <option value="2">In Active</option>

                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please provide a Sales.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="button" >Save</Button>
                </Form>
            </div>
        </>
    )
}

export default RateSheertAdd