/** @format */

import React, { useEffect, useState } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import MaterialGradeCreator from "./MaterialGradeCreator";
import MaterialCodeCreator from "./MaterialCodeCreator";
import Axios from "axios";

export default function MaterialSetUp() {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		Axios.get("http://192.168.1.25:4018/getMtrlTypeList")

			.then((res) => {
				if (res.data.status === "success") {
					setCategory(res.data.result);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const [mtrlData, setMtrlData] = useState({});
	const [selectRow, setSelectRow] = useState({});

	const selectedRowFun = (item, index) => {
		//console.log("item", item.Specific_weight)
		console.log("index", index);
		let list = { ...item, index: index };
		setSelectRow(list);
		//console.log("list",list);

		//Fetch the data for table Material Grade Creator
		Axios.post("http://192.168.1.25:4018/getMtrlGradeData", {
			material: item.Material,
		})
			.then((res) => {
				//console.log("mtrlData", res.data)
				setMtrlData(res.data);
			})
			.catch((err) => {
				console.log("eroor in fromntend", err);
			});
	};

	return (
		<>
			<div className="">
				<h4 className="title">Material Grade Creator</h4>
			</div>
			<div className="row">
				<div className="col-md-5 col-sm-12">
					<div
						style={{
							overflowX: "scroll",
							overflowY: "scroll",
							height: "730px",
						}}>
						<Table
							striped
							className="table-data border"
							style={{ border: "1px" }}>
							<thead className="tableHeaderBGColor">
								<tr>
									<th style={{ whiteSpace: "nowrap" }}>Material</th>
									<th style={{ whiteSpace: "nowrap" }}>Short Name</th>
									<th style={{ whiteSpace: "nowrap" }}>Excise Class</th>
									<th style={{ whiteSpace: "nowrap" }}>Specific Weight</th>
								</tr>
							</thead>
							<tbody className="tablebody">
								{category.map((cat, key) => (
									<tr
										onClick={() => selectedRowFun(cat, key)}
										className={
											key === selectRow?.index ? "selcted-row-clr" : ""
										}>
										<td>{cat.Material} </td>
										<td>{cat.MtrlID} </td>
										<td>{cat.ExciseClNo}</td>
										<td>{cat.SpecificWt}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</div>

				<div className="col-md-7 col-sm-12">
					<Tabs className="nav-tabs tab_font">
						<Tab
							eventKey="materialGradeCreator"
							title="Material Grade Creator">
							<React.Fragment key={selectRow?.index}>
								<MaterialGradeCreator
									mtrlData={mtrlData}
									setMtrlData={setMtrlData}
									selectRow={selectRow}
									setSelectRow={setSelectRow}
								/>
							</React.Fragment>
						</Tab>
						<Tab
							eventKey="materialCodeCreator"
							title="Material Code Creator">
							<React.Fragment key={selectRow?.index}>
								<MaterialCodeCreator
									mtrlData={mtrlData}
									setMtrlData={setMtrlData}
									selectRow={selectRow}
									setSelectRow={setSelectRow}
								/>
							</React.Fragment>
						</Tab>
					</Tabs>
				</div>
			</div>
		</>
	);
}
