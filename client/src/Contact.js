import { useEffect, useState } from "react";
import { BDM, BAM, PM, ADM, MM } from "./ContactInfo";

export default function Contact() {
  const [role, setRole] = useState("");

  const [bdmViz, setbdmViz] = useState(false);
  const [bamViz, setbamViz] = useState(false);
  const [pmViz, setpmViz] = useState(false);
  const [admViz, setadmViz] = useState(false);
  const [mmViz, setmmViz] = useState(false);

  useEffect(() => {
    role === "Business Development Manager" ? setbdmViz(true) : setbdmViz(false);
    role === "Business Alliance Manager" ? setbamViz(true) : setbamViz(false);
    role === "Project Manager" ? setpmViz(true) : setpmViz(false);
    role === "Assessment Development Manager" ? setadmViz(true) : setadmViz(false);
    role === "Marketing Manager" ? setmmViz(true) : setmmViz(false);
  }, [role]);

  const handleOnChange = (e) => {
    setRole(e.target.value);
  };

  const renderResult = () => {
    let result;
    role === "" ? (result = "") : (result = role);
    return result;
  };

  return (
    <div>
      <h2 className="subhead">contact</h2>
      <h3>Select role</h3>
      <div>
        <select value={role} onChange={handleOnChange}>
          <option value="selectRole"></option>
          <option value="Business Development Manager">Business Development Manager</option>
          <option value="Business Alliance Manager">Business Alliance Manager</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Assessment Development Manager">Assessment Development Manager</option>
          <option value="Marketing Manager">Marketing Manager</option>
        </select>
      </div>
      <div>
        <h4>{renderResult()}</h4>
        {bdmViz && <BDM />}
        {bamViz && <BAM />}
        {pmViz && <PM />}
        {admViz && <ADM />}
        {mmViz && <MM />}
      </div>
    </div>
  );
}
