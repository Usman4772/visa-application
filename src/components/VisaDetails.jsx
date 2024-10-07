import moment from "moment";
import React from "react";

const VisaDataDisplay = ({ details }) => {
  return (
    <div className="grid grid-cols-1 gap-2 mb-6 text-sm">
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">e-Visa Number:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {details.visaNumber}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Name:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {details.Name}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Date of Birth:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {" "}
          {details.Dob ? moment(details.Dob).format("DD-MM-YYYY") : "N/A"}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Sex:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {details.Sex}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Nationality:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {details.Nationality}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Travel Document Number:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {details.TravelNumber}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Visa Issue Date:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {" "}
          {details.issue_date
            ? moment(details.issue_date).format("DD-MM-YYYY")
            : "N/A"}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Visa Valid Till:</span>
        <span className=" w-[60%] text-start font-semibold ">
          {details.valid_till
            ? moment(details.valid_till).format("DD-MM-YYYY")
            : "N/A"}
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Type of Visa:</span>
        <span className=" w-[60%] text-start font-semibold ">MULTIPLE</span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Remarks:</span>
        <span className=" w-[60%] text-start font-semibold ">
          Not Valid for Employment outside Four point of Sheraton
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Visa Issuing Authority:</span>
        <span className=" w-[60%] text-start font-semibold ">
          IMMIGRATION NEW ZEALAND &CHECKPOINT AUTHORITY
        </span>
      </div>
      <div className="flex relative w-full justify-between">
        <span className="font-bold w-1/3">Visa Processing Fee:</span>
        <span className=" w-[60%] text-start font-semibold ">572/ NZD</span>
      </div>
      <div className="w-full flex justify-start mt-4 flex-col gap-2">
        <div className="barcode"></div>
        <span className=" w-[60%] text-start font-semibold ">
          {details.visaNumber}
        </span>
      </div>
    </div>
  );
};

export default VisaDataDisplay;
