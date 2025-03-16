import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { departments, treatments } from "@/constants/departments";

const BookConsultation = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [medicalReports, setMedicalReports] = useState(null);
  const [medicalCondition, setMedicalCondition] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    setSelectedTreatment(null); // Reset treatment when selecting a new department
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedTreatment(subcategory);
  };

  const handleFileChange = (e) => {
    setMedicalReports(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedDepartment || !selectedTreatment) {
      setMessage("Please select a department and treatment.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("department", selectedDepartment);
      formData.append("treatment", selectedTreatment);
      formData.append("medicalHistory", medicalCondition);
      if (medicalReports) {
        formData.append("medicalDocument", medicalReports);
      }

      const response = await axios.post(
        "https://backend-travelncure.onrender.com/api/patient/consultation",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(response.data.message || "Consultation request submitted successfully!");
      setShowConfirmation(true);
      setSelectedDepartment(null);
      setSelectedTreatment(null);
      setMedicalCondition("");
      setMedicalReports(null);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="mb-4">Please log in to book a consultation.</p>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-semibold mb-8 text-center">Book a Consultation</h1>

          {message && <p className="text-center text-red-600">{message}</p>}

          <div className="h-[50vh] py-8 flex flex-col items-center bg-[#071e3f] text-white">
            <h2 className="text-2xl font-semibold mb-6 uppercase">Departments</h2>
            <div className="flex space-x-4 overflow-x-auto scroll-smooth">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center w-[150px] h-[150px] p-4 border rounded-full shadow cursor-pointer ${
                    selectedDepartment === dept.name ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleDepartmentClick(dept.name)}
                >
                  <img src={dept.icon} alt={dept.name} className="h-16 w-16 mb-2" />
                  <span className="text-md font-medium">{dept.name}</span>
                </div>
              ))}
            </div>
          </div>

          {selectedDepartment && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Treatments under {selectedDepartment}
              </h2>
              <div className="flex space-x-4 overflow-x-auto scroll-smooth justify-center">
                {treatments[selectedDepartment]?.map((subcategory, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center w-[150px] h-[150px] p-4 border rounded-full shadow-md cursor-pointer text-center ${
                      selectedTreatment === subcategory ? "bg-blue-200" : "bg-amber-50"
                    }`}
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    <span className="text-md font-medium">{subcategory}</span>
                  </div>
                ))}
              </div>

              {selectedTreatment && (
                <div className="my-8 mx-auto">
                  <h2 className="text-2xl font-semibold mb-4">{selectedTreatment}</h2>

                  <div className="flex flex-col space-y-4">
                    <div>
                      <Label htmlFor="reports">Upload Medical Reports (PDF)</Label>
                      <Input type="file" id="reports" accept="application/pdf" onChange={handleFileChange} />
                    </div>

                    <div>
                      <Label htmlFor="condition">Brief Medical Condition</Label>
                      <textarea
                        id="condition"
                        className="w-full p-2 border rounded-md"
                        value={medicalCondition}
                        onChange={(e) => setMedicalCondition(e.target.value)}
                      />
                    </div>

                    <Button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                      {loading ? "Submitting..." : "Submit Consultation"}
                    </Button>
                  </div>

                  <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Confirmation</DialogTitle>
                        <DialogDescription>
                          Thanks for submitting your consultation request! Our team will get back to you soon.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BookConsultation;
