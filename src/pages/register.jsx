import React, { useState, useEffect } from "react";
import "./register.css";

const Register = () => {
  const memberCount = 4;
  const totalSteps = 5; // 4 members + 1 SDG
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    members: Array(memberCount).fill({
      name: "",
      roll: "",
      email: "",
      contact: "",
    }),
    sdgs: [],
  });
  const [message, setMessage] = useState({ show: false, title: "", body: "" });

  const sdgList = [
    { num: 1, name: "No Poverty" },
    { num: 2, name: "Zero Hunger" },
    { num: 3, name: "Good Health & Well-being" },
    { num: 4, name: "Quality Education" },
    { num: 5, name: "Gender Equality" },
    { num: 6, name: "Clean Water & Sanitation" },
    { num: 7, name: "Affordable & Clean Energy" },
    { num: 8, name: "Decent Work & Economic Growth" },
    { num: 9, name: "Industry, Innovation, & Infrastructure" },
    { num: 10, name: "Reduced Inequalities" },
    { num: 11, name: "Sustainable Cities & Communities" },
    { num: 12, name: "Responsible Consumption & Production" },
    { num: 13, name: "Climate Action" },
    { num: 14, name: "Life Below Water" },
    { num: 15, name: "Life on Land" },
    { num: 16, name: "Peace, Justice, & Strong Institutions" },
    { num: 17, name: "Partnership for the Goals" },
  ];

  // --- Message handling
  const showMessage = (title, body) =>
    setMessage({ show: true, title, body });
  const hideMessage = () =>
    setMessage({ show: false, title: "", body: "" });

  // --- Member Input Handling
  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData({ ...formData, members: updatedMembers });
  };

  // --- SDG Selection
  const toggleSdg = (value) => {
    let newSdgs = [...formData.sdgs];
    if (newSdgs.includes(value)) {
      newSdgs = newSdgs.filter((s) => s !== value);
    } else if (newSdgs.length < 2) {
      newSdgs.push(value);
    } else {
      showMessage("SDG Limit", "You can only select a maximum of 2 SDGs.");
    }
    setFormData({ ...formData, sdgs: newSdgs });
  };

  // --- Validation
  const validateStep = () => {
    if (currentStep <= memberCount) {
      const member = formData.members[currentStep - 1];
      const isOptional = currentStep > 2;
      if (
        !isOptional &&
        (!member.name || !member.roll || !member.email || !member.contact)
      ) {
        showMessage(
          "Validation Error",
          `Please fill all fields for Member ${currentStep}`
        );
        return false;
      }
    }
    return true;
  };

  // --- Navigation
  const nextStep = () => {
    if (!validateStep()) return;
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // --- Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const filledMembers = formData.members.filter((m) => m.name).length;
    if (filledMembers < 2 || filledMembers > 4) {
      showMessage(
        "Team Size Error",
        `Team must have 2–4 members. You have ${filledMembers}.`
      );
      return;
    }
    if (formData.sdgs.length !== 2) {
      showMessage("SDG Error", "Please select exactly 2 SDGs.");
      return;
    }
    console.log("Form Submitted:", formData);
    showMessage("Success!", "Your team registration is complete.");
  };

  return (
    <div className="hult-container">
      <form onSubmit={handleSubmit} className="form-box">
        {/* Header */}
        <header className="form-header">
          <h1>
            <span className="heritage">HULT</span> PRIZE Registration
          </h1>
          <p>
            Join the world's largest student startup competition. Bring your
            social enterprise idea to life!
          </p>
        </header>

        {/* Steps */}
        <div className="progress">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`progress-dot ${
                currentStep === i + 1 ? "active" : ""
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Member Steps */}
        {currentStep <= memberCount && (
          <div className="member-form">
            <h2>
              Member {currentStep}{" "}
              {currentStep === 1 ? "(Leader)" : currentStep > 2 ? "(Optional)" : ""}
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.members[currentStep - 1].name}
              onChange={(e) =>
                handleMemberChange(currentStep - 1, "name", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Roll Number"
              value={formData.members[currentStep - 1].roll}
              onChange={(e) =>
                handleMemberChange(currentStep - 1, "roll", e.target.value)
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.members[currentStep - 1].email}
              onChange={(e) =>
                handleMemberChange(currentStep - 1, "email", e.target.value)
              }
            />
            <input
              type="tel"
              placeholder="Contact"
              value={formData.members[currentStep - 1].contact}
              onChange={(e) =>
                handleMemberChange(currentStep - 1, "contact", e.target.value)
              }
            />
          </div>
        )}

        {/* SDG Step */}
        {currentStep === totalSteps && (
          <div className="sdg-step">
            <h2>Select 2 SDGs</h2>
            <div className="sdg-grid">
              {sdgList.map((sdg) => (
                <div
                  key={sdg.num}
                  className={`sdg-card ${
                    formData.sdgs.includes(`${sdg.num} - ${sdg.name}`)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleSdg(`${sdg.num} - ${sdg.name}`)}
                >
                  <span className="sdg-num">{sdg.num}</span>
                  <span>{sdg.name}</span>
                </div>
              ))}
            </div>
            <p>Selected: {formData.sdgs.length}/2</p>
          </div>
        )}

        {/* Navigation */}
        <div className="nav-buttons">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep}>
              ← Previous
            </button>
          )}
          {currentStep < totalSteps && (
            <button type="button" onClick={nextStep}>
              Next →
            </button>
          )}
          {currentStep === totalSteps && (
            <button type="submit">Register Team</button>
          )}
        </div>
      </form>

      {/* Message Modal */}
      {message.show && (
        <div className="modal">
          <div className="modal-content">
            <h3>{message.title}</h3>
            <p>{message.body}</p>
            <button onClick={hideMessage}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
