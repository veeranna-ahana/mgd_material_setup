import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import AlertModal from "../component/alert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component for the Sheet form
const SheetForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Sheet Parameters</b>
      </h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Thickness</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Plate form
const PlateForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Plate Parameters</b>
      </h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Thickness</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Tube Round form
const TubeRoundForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Tube Round Parameters</b>
      </h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">OD</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label" style={{ whiteSpace: "nowrap" }}>
            Wall Thickness
          </label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara2"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Tube Square form
const TubeSquareForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Tube Square Parameters</b>
      </h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Side 1</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label" style={{ whiteSpace: "nowrap" }}>
            Wall Thickness
          </label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara2"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Tube Rectangle form
const TubeRectangleForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Tube Rectangle Parameters</b>
      </h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Side 1</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Side 2</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara2"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label" style={{ whiteSpace: "nowrap" }}>
            Wall Thickness
          </label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara3"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Strip form
const StripForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Strip Parameters</b>
      </h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Width</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Thickness</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara2"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Tube Rectangle form
const TilesForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Tube Rectangle Parameters</b>
      </h5>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Width</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Length</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara2"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Thickness</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara3"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-2 col-sm-12 mt-3">
              <span>mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Block form
const BlockForm = () => {
  return (
    <div>
      <h5>
        <b>Block Parameters</b>
      </h5>
    </div>
  );
};

// Component for the Cylinder form
const CylinderForm = ({ formFields, handleFieldChange }) => {
  return (
    <div>
      <h5>
        <b>Cylinder Parameters</b>
      </h5>

      <div className="row">
        <div className="col-md-4 col-sm-12 mt-1">
          <label className="form-label">Capacity</label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <input
                className="in-fields"
                type="text"
                id="staticPara1"
                onChange={handleFieldChange}
              />
            </div>
            <div className="col-md-1 col-sm-12 mt-3">
              <span style={{ whiteSpace: "nowrap" }}>Cubic Mtr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the Units form
const UnitsForm = () => {
  return (
    <div>
      <h5>
        <b>Units Parameters</b>
      </h5>
    </div>
  );
};

export default function MaterialCodeCreator(props) {
  // console.log('porps', props.selectRow.Material);
  let [alertModal1, setAlertModal1] = useState(false);
  const [toastShown, setToastShown] = useState(false);
  let openModal1 = () => {
    if (!totalfield.trim()) {
      if (!toast.isActive("emptyFieldsToast")) {
        // Check if the toast is not active
        toast.error("Material Code cannot be empty", {
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

  const [selectedShape, setSelectedShape] = useState("");
  const [formFields, setFormFields] = useState("");

  const handleShapeChange = (e) => {
    const shape = e.target.value;
    setSelectedShape(shape);
    setFormFields({});
    console.log("Selected Shape:", shape);
  };

  const handleFieldChange = (e) => {
    const fieldId = e.target.id;
    const fieldValue = e.target.value;
    setFormFields((prevFields) => ({
      ...prevFields,
      [fieldId]: fieldValue,
    }));
  };
  // console.log("TO select the StaticPara1",formFields.staticPara1);
  //console.log("TO select the StaticPara2",formFields.staticPara2);
  //console.log("TO select the StaticPara3",formFields.staticPara3);
  const [selectedMtrlGradeId, setSelectedMtrlGradeId] = useState("");
  const [mtrlCodes, setMtrlCodes] = useState([]);
  const [selectRow, setSelectRow] = useState({});

  const handleTableRowClick = (mtrlGradeId, item, index) => {
    setSelectedMtrlGradeId(mtrlGradeId);
    let list = { ...item, index: index };
    setSelectRow({ index: index });
    // console.log("Mtrl Grade Id:", mtrlGradeId);
    const Data = {
      MGI: mtrlGradeId,
      S: selectedShape,
    };

    Axios.post("http://172.16.20.61:5090/getMtrlCode", { Data })
      .then((response) => {
        // Handle the response from the backend

        setMtrlCodes(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      });
  };

  useEffect(() => {
    if (selectedShape) {
      const Data = {
        MGI: selectedMtrlGradeId,
        S: selectedShape,
      };

      Axios.post("http://172.16.20.61:5090/getMtrlCode", { Data })
        .then((response) => {
          // Handle the response from the backend
          setMtrlCodes(response.data);
        })
        .catch((error) => {
          // Handle any errors that occur during the API call
          console.error(error);
        });
    }
  }, [selectedShape, selectedMtrlGradeId]);

  let selectedForm;
  switch (selectedShape) {
    case "Sheet":
      selectedForm = (
        <SheetForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Plate":
      selectedForm = (
        <PlateForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Tube Round":
      selectedForm = (
        <TubeRoundForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Tube Square":
      selectedForm = (
        <TubeSquareForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Tube Rectangle":
      selectedForm = (
        <TubeRectangleForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Strip":
      selectedForm = (
        <StripForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Tiles":
      selectedForm = (
        <TilesForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Block":
      selectedForm = (
        <BlockForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Cylinder":
      selectedForm = (
        <CylinderForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    case "Units":
      selectedForm = (
        <UnitsForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
        />
      );
      break;
    default:
      selectedForm = null;
  }

  const handleAlertModal1ButtonClick = (e) => {
    e.preventDefault();
    openModal1();
  };

  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  let totalfield =
    selectedShape +
    " " +
    selectedMtrlGradeId +
    " " +
    Object.values(formFields).join(" ");

  const handleSubmit = () => {
    openModal2();
    const formData = {
      mtrlGradeId: selectedMtrlGradeId,
      shape: selectedShape,
      mtrlType: props.selectRow.Material,
      mtrlCode:
        selectedShape +
        " " +
        selectedMtrlGradeId +
        " " +
        Object.values(formFields).join(" "),
      StaticPara1: formFields.staticPara1, // Set to null if not provided
      StaticPara2: formFields.staticPara2 || 0.0, // Set to null if not provided
      StaticPara3: formFields.staticPara3 || 0.0,
    };

    Axios.post("http://172.16.20.61:5090/submitSecondForm", { formData })
      .then((response) => {
        setSubmitMessage(response.data.message);
        setSubmitError("");
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error(error);
        setSubmitError("Enter Valid Details");
        // Show an error message or perform any other actions
      });
    setFormFields({});
  };

  const [shapeData, setShapeData] = useState([]);

  // Fetch the shape data from the backend API
  useEffect(() => {
    Axios.get("http://172.16.20.61:5090/getShapes")
      .then((response) => {
        // Handle the response and set the shape data in state
        setShapeData(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      });
  }, []);
  const shapeOptions = shapeData.map((shape, index) => (
    <option key={index} value={shape}>
      {shape}
    </option>
  ));

  return (
    <div>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <label className="form-label">Select Shape</label>
          <select
            id=""
            className="ip-select"
            style={{ width: "250px" }}
            value={selectedShape}
            onChange={handleShapeChange}
          >
            <option value="">Select Shape</option>
            {shapeOptions}
          </select>
          <h6 className="mt-2">
            <b>Select Material Grade</b>
          </h6>
          <div
            className="mt-2"
            style={{
              overflowX: "scroll",
              overflowY: "scroll",
              height: "283px",
            }}
          >
            <Table
              striped
              className="table-data border"
              style={{ border: "1px" }}
            >
              <thead className="tableHeaderBGColor">
                <tr>
                  <th style={{ whiteSpace: "nowrap" }}>Mtrl Grade Id</th>
                  <th style={{ whiteSpace: "nowrap" }}>Grade</th>
                  <th style={{ whiteSpace: "nowrap" }}>Specific_Wt</th>
                  <th style={{ whiteSpace: "nowrap" }}>Excise_Cl_No</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {props.mtrlData.length > 0
                  ? props.mtrlData?.map((val, i) => (
                      <tr
                        key={val.MG_id}
                        onClick={() =>
                          handleTableRowClick(val.MtrlGradeID, val, i)
                        }
                        className={
                          i === selectRow.index ? "selcted-row-clr" : ""
                        }
                      >
                        <td>{val.MtrlGradeID}</td>
                        <td>{val.Grade}</td>
                        <td>{val.Specific_Wt}</td>
                        <td>{val.Excise_Cl_No}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </div>
          <Form className="mt-3 mb-5">
            <div className="form-bg ip-box" style={{ height: "340px" }}>
              <div style={{ height: "170px" }}>{selectedForm}</div>
              <label className="form-label">New Material Code</label>
              <input
                className="in-fields"
                type="text"
                style={{ width: "320px" }}
                value={totalfield}
              />
              <button
                className="button-style "
                onClick={handleAlertModal1ButtonClick}
              >
                Create New Code
              </button>
              <div style={{ marginBottom: "10px" }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  Select SHAPE,Material Grade.Enter Parameters and Save
                </span>
              </div>
            </div>
          </Form>
        </div>
        <div className="col-md-4 col-sm-12 mt-5">
          <div
            className="mt-5"
            style={{
              overflowX: "scroll",
              overflowY: "scroll",
              //height:"277px"
              height: "635px",
            }}
          >
            <Table
              striped
              className="table-data border"
              style={{ border: "1px" }}
            >
              <thead className="tableHeaderBGColor">
                <tr>
                  <th style={{ whiteSpace: "nowrap" }}>Mtrl Code</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {mtrlCodes.length > 0 ? (
                  mtrlCodes.map((cat, key) => (
                    <tr key={key}>
                      <td>{cat.Mtrl_Code}</td>
                    </tr>
                  ))
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <AlertModal
        show={alertModal1}
        onHide={(e) => setAlertModal1(e)}
        firstbutton={handleSubmit}
        secondbutton={closeModal1}
        title="magod_setup"
        message={`Do you wish to create New Material Code: ${totalfield}`}
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
