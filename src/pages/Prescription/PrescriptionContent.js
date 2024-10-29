import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Prescription = ({ prescription }) => {
    const pdfRef = useRef();

    const generatePDF = () => {
        const element = pdfRef.current;
        html2pdf()
            .from(element)
            .save('prescription.pdf');
    };

    // Destructure with defaults
    const {
        doctorName = "Dr. Unknown",
        doctorDetails = "Details not available",
        doctorContact = "N/A",
        hospitalName = "Hospital Name",
        hospitalAddress = "Address not provided",
        emergencyContact = "N/A",
        patientId = "N/A",
        patientAge = "N/A",
        patientAddress = "Address not provided",
        temperature = "N/A",
        weight = "N/A",
        bloodPressure = "N/A",
        date = "N/A",
        time = "N/A",
        chiefComplaints = [],
        clinicalFindings = [],
        diagnosis = "Diagnosis not provided",
        medications = [],
        advice = "Advice not provided",
        followUpDate = "N/A"
    } = prescription || {};

    return (
        <div>
            <div ref={pdfRef} className="container">
                <div className="row">
                    <div className="col-4 pt-5">
                        <h6>{doctorName}</h6>
                        <div>{doctorDetails}</div>
                        <div>Mob. No: {doctorContact}</div>
                    </div>
                    <div className="col-4 rounded mx-auto d-block 50px pt-5 px-5">
                        <img src="../React/hms/public/log.png" alt="Logo" style={{ width: '70px', height: '70px' }} />
                    </div>
                    <div className="col-4 pt-5">
                        <h4>{hospitalName}</h4>
                        <span>{hospitalAddress}</span><br />
                        <span>Emergency Contact Number:</span><br />
                        <span>{emergencyContact}</span>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-8 px-4">
                        <div>Patient ID: {patientId}</div>
                        <div>Age: {patientAge}</div>
                        <div>Address: {patientAddress}</div>
                        <div>Temp(deg): {temperature}</div>
                        <div>Weight: {weight}</div>
                        <div>BP: {bloodPressure}</div>
                    </div>
                    <div className="col-4 px-5">
                        <span>Date: {date}</span><br />
                        <span>Time: {time}</span>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6 fw-bold px-5">Chief Complaints</div>
                    <div className="col-6 fw-bold px-5">Clinical Findings</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6 px-5">
                        {chiefComplaints.length > 0 ? (
                            chiefComplaints.map((complaint, index) => (
                                <div key={index}>{complaint}</div>
                            ))
                        ) : (
                            <div>No complaints listed.</div>
                        )}
                    </div>
                    <div className="col-6 px-5">
                        {clinicalFindings.length > 0 ? (
                            clinicalFindings.map((finding, index) => (
                                <div key={index}>{finding}</div>
                            ))
                        ) : (
                            <div>No findings listed.</div>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="fw-bold px-5">Diagnosis:</div>
                        <div className="px-5">{diagnosis}</div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4 fw-bold px-5">Medicine Name</div>
                    <div className="col-4 fw-bold px-5">Dosage</div>
                    <div className="col-4 fw-bold px-5">Duration</div>
                </div>
                <hr />
                {medications.length > 0 ? (
                    medications.map((medication, index) => (
                        <div className="row px-4" key={index}>
                            <div className="col-4">{medication.name}</div>
                            <div className="col-4">{medication.dosage}</div>
                            <div className="col-4">{medication.duration}</div>
                        </div>
                    ))
                ) : (
                    <div className="row px-4">No medications prescribed.</div>
                )}
                <hr />
                <div className="row px-4">
                    <div className="fw-bold px-5 pt-5">Advice:</div>
                    <div className="px-5">{advice}</div>
                </div>
                <div className="row">
                    <div className="fw-bold px-5 pt-5">Follow Up: {followUpDate}</div>
                </div>
            </div>
            <button onClick={generatePDF} className="btn btn-primary mt-4">Download Prescription PDF</button>
        </div>
    );
};


export default Prescription;
