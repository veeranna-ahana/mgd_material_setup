import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import AlertModal from "../component/alert";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MaterialGradeCreator(props) {
  //console.log('porps', props.selectRow);

  let [alertModal1, setAlertModal1] = useState(false);
  const [toastShown, setToastShown] = useState(false);
  let openModal1 = () => {
    if (!newGrade.trim() || !newSpecificWeight.trim()) {
      if (!toast.isActive("emptyFieldsToast")) {
        // Check if the toast is not active
        toast.error("All Fields are mandatory", {
          toastId: "emptyFieldsToast",
        }); // Provide a unique toastId
      }
      return;
    }
    setToastShown(false);
    //e.preventDefault();
    setAlertModal1(true);
  };
  let closeModal1 = () => {
    setAlertModal1(false);
  };

  let [alertModal2, setAlertModal2] = useState(false);
  let openModal2 = () => {
    setAlertModal1(false);
    setAlertModal2(true);
  };
  let closeModal2 = () => {
    setAlertModal2(false);
    window.location.reload();
  };

  const [newGrade, setNewGrade] = useState("");

  const handleChange = (e) => {
    setNewGrade(e.target.value);
  };

  const [newSpecificWeight, setNewSpecificWeight] = useState(
    props.selectRow.SpecificWt
  );
  const swChange = (e) => {
    setNewSpecificWeight(e.target.value);
  };

  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleAlertModal1ButtonClick = (e) => {
    e.preventDefault();
    openModal1();
  };

  console.log("newGrade", newGrade);

  const handleSubmit = () => {
    // e.preventDefault();
    openModal2();

    // Create an object with the form data
    const formData = {
      mgId: props.selectRow.MtrlID + " " + newGrade,
      grade: newGrade,
      specificWeight: newSpecificWeight,
      exciseClNo: props.selectRow.ExciseClNo,
      m: props.selectRow.Material,
    };
    // Make an API request to your backend server
    Axios.post("http://172.16.20.61:5090/submitMaterialGradeForm", { formData })
      .then((response) => {
        // Handle the response from the server if needed
        // console.log("qwertyuiop",response.data);
        // Show the success modal or perform any other actions
        setSubmitMessage(response.data.message);
        setSubmitError("");
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error(error);
        setSubmitError("Enter Valid Details");
        // Show an error message or perform any other actions
      });
    console.log("hyy");
    console.log("setMtrlData", props.setMtrlData);
  };
  return (
    <div>
      <div
        className="mt-2"
        style={{
          overflowX: "scroll",
          overflowY: "scroll",
          //height:"280px"
          height: "395px",
        }}
      >
        <Table striped className="table-data border" style={{ border: "1px" }}>
          <thead className="tableHeaderBGColor">
            <tr>
              <th style={{ whiteSpace: "nowrap" }}>MG_id</th>
              <th style={{ whiteSpace: "nowrap" }}>Grade</th>
              <th style={{ whiteSpace: "nowrap" }}>Specific_weight</th>
              <th style={{ whiteSpace: "nowrap" }}>Excise_cl_no</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {props.mtrlData.length > 0
              ? props.mtrlData?.map((val, i) => (
                  <>
                    <tr>
                      <td>{val.MtrlGradeID}</td>
                      <td>{val.Grade}</td>
                      <td>{val.Specific_Wt}</td>
                      <td>{val.Excise_Cl_No}</td>
                    </tr>
                  </>
                ))
              : null}
          </tbody>
        </Table>
      </div>
      <Form className="mt-2">
        <div className="form-bg" style={{ height: "290px" }}>
          <h5>
            <label className="form-label">Add New Grade</label>
          </h5>
          <div className="row mb-5">
            <div className="col-md-8 col-sm-12">
              <div className="d-flex" style={{gap:'35px'}}>
                <label className="form-label" style={{whiteSpace:'nowrap'}}>New Grade</label>
                <input
                  className="in-field mt-1"
                  type="text"
                  name="newGrade"
                  value={newGrade}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex" style={{gap:'10px'}}>
                <label className="form-label" style={{whiteSpace:'nowrap'}}>Specific Weight</label>
                <input
                  className="in-field mt-1"
                  type="text"
                  defaultValue={props.selectRow.SpecificWt}
                  onChange={swChange}
                />
              </div>
              <div className="d-flex" style={{gap:'33px'}}>
                <label className="form-label" style={{whiteSpace:'nowrap'}}>Excise Class</label>
                <input
                  className="in-field mt-1"
                  type="text"
                  value={props.selectRow.ExciseClNo}
                />
              </div>
              <button
                className="button-style"
                onClick={handleAlertModal1ButtonClick}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Form>
      <AlertModal
        show={alertModal1}
        onHide={(e) => setAlertModal1(e)}
        firstbutton={handleSubmit}
        secondbutton={closeModal1}
        title="magod_setup"
        message={`Do you wish to add: ${newGrade}`}
        firstbuttontext="Yes"
        secondbuttontext="No"
      />

      <AlertModal
        show={alertModal2}
        onHide={(e) => setAlertModal2(e)}
        firstbutton={closeModal2}
        title="magod_setup"
        message={submitMessage || submitError}
        firstbuttontext="Ok"
      />
    </div>
  );
}
