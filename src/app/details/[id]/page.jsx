// import React from "react";
// import Image from "next/image";

// const visaData = {
//   visaNumber: "E6406841",
//   name: "JOHN DOE",
//   dateOfBirth: "01 JAN 1990",
//   sex: "MALE",
//   nationality: "UNITED STATES",
//   travelDocumentNumber: "CV3499173",
//   visaIssueDate: "15 MAR 2024",
//   visaValidTill: "15 MAR 2026",
//   typeOfVisa: "MULTIPLE",
//   remarks: "NOT VALID for Employment outside Point of Entry",
//   visaIssuingAuthority: "IMMIGRATION NEW ZEALAND SCHEKCPOINT AUTHORITY",
//   visaProcessingFee: "572/ NZD",
// };

// export default function Details({ params }) {
//   const tracking_id = params.id;
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 relative p-4 ">
//       <div className="absolute inset-0 z-0 bg-fern-pattern opacity-10 detail" />
//       <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-2xl w-full bg-pattern">
//         <header className="flex items-center mb-6 justify-center">
//           <h1 className="ml-4 text-2xl font-bold border border-t-0 border-l-0 border-r-0 w-full text-center border-b-black ">
//             e-Visa for New Zealand
//           </h1>
//         </header>

//         <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
//           {Object.entries(visaData).map(([key, value]) => (
//             <div key={key}>
//               <span className="font-semibold">
//                 {key.replace(/([A-Z])/g, " $1").trim()}:
//               </span>{" "}
//               {value}
//             </div>
//           ))}
//         </div>

//         <div className="mb-6 flex justify-center">
//           <Image
//             src="/api/placeholder/300/100"
//             alt="Barcode"
//             width={300}
//             height={100}
//           />
//         </div>

//         <footer className="text-sm">
//           <p className="mb-2">
//             You are required to bring this paper e-Visa with you as the airline
//             requires you to produce it for verification when you check-in.
//           </p>
//           <p className="mb-2">
//             You may wish to visit our website at http://www.immigration.govt.nz
//             using Save to verify the information contained in this e-Visa.
//           </p>
//           <p className="mb-2">
//             Important Note: This e-Visa is issued to you based on the
//             information provided in the application for which you have
//             truthfully declared to be so or for which you had consented for a
//             proxy to submit on your behalf and are fully aware of the
//             information so provided by your authorised proxy.
//           </p>
//           <p>
//             A New Zealand visa in an immigration pass. It is a pre-entry
//             permission for you to travel and seek entry into New Zealand. A
//             holder of a valid New Zealand visa who is found suitable for
//             entering New Zealand will be issued with an immigration pass to
//             enter and remain in New Zealand.
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// }
"use client";
import VisaDataDisplay from "@/components/VisaDetails";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const visaData = [
  { label: "e-Visa Number:", value: "E6406841" },
  { label: "Name:", value: "BUTT MUHAMMAD YASIR" },
  { label: "Date of Birth:", value: "27 MAY 1992" },
  { label: "Sex:", value: "MALE" },
  { label: "Nationality:", value: "PAKISTAN" },
  { label: "Travel Document Number:", value: "CV3499173" },
  { label: "Visa Issue Date:", value: "13 MAR 2024" },
  { label: "Visa Valid Till:", value: "13 MAR 2026" },
  { label: "Type of Visa:", value: "MULTIPLE" },
  {
    label: "Remarks:",
    value: "Not Valid for Employment outside Four point of Sheraton",
  },
  {
    label: "Visa Issuing Authority:",
    value: "IMMIGRATION NEW ZEALAND &CHECKPOINT AUTHORITY",
  },
  { label: "Visa Processing Fee:", value: "572/ NZD" },
];

export default function Details({ params }) {
  const [visaDetails, setVisaDetails] = useState({});
  const [error, setError] = useState(false);
  const trackingNumber = params.id;
  async function getDetails() {
    try {
      const response = await axios.post("/api/visa-status/check", {
        trackingNumber,
      });
      if (response.data.success) {
        const visa = response.data.data.visa;
        setVisaDetails(visa);
      }
    } catch (error) {
      setError(true);
    }
  }
  useEffect(() => {
    getDetails();
  }, [trackingNumber]);
  if (error)
    return (
      <div className="w-screen h-screen flex items-center justify-center text-3xl font-semibold">
        No details found
      </div>
    );
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 relative ">
      <div className="absolute inset-0 z-0 bg-fern-pattern opacity-10" />
      <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-3xl w-full relative bg-pattern">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold border-b border-gray-300 pb-2">
            e-Visa for New Zealand
          </h1>
        </header>

        <p className="text-sm mb-4 font-semibold">
          You are required to bring this paper e-Visa with you as the airline
          requires you to produce it for verification when you check.
        </p>

        <VisaDataDisplay details={visaDetails} />

        <footer className="text-sm font-semibold">
          <p className="mb-2">
            You are required to bring this paper e-Visa with you as the airline
            requires you to produce it for verification when you check-in.
          </p>
          <p className="mb-2">
            You may wish to visit our website at http://www.immigration.govt.nz
            using Save to verify the information contained in this e-Visa.
          </p>
          <p className="mb-2">
            <strong>Important Note:</strong> This e-Visa is issued to you based
            on the information provided in the application for which you have
            truthfully declared to be so or for which you had consented for a
            proxy to submit on your behalf and are fully aware of the
            information so provided by your authorised proxy.
          </p>
          <p className="mb-2">
            A New Zealand visa in an immigration pass. It is a pre-entry
            permission for you to travel and seek entry into New Zealand. A
            holder of a valid New Zealand visa who is found suitable for
            entering New Zealand will be issued with an immigration pass to
            enter and remain in New Zealand.
          </p>
          <p>
            Possession of a valid visa alone does not guarantee entry into New
            Zealand. You must also meet the following entry requirements: (I)
            Hold a passport with at least 6 months validity (II) Have sufficient
            support for the period of stay in New Zealand and (III) Have
            confirmed onward/return air ticket(s)
          </p>
          <p>
            The grant of an immigration pass to you will be determined by the
            Immigration & Checkpoints Authority (ICA) officers at the point of
            entry. The period of stay granted is shown on the visa pass
            endorsement given on your passport and it is not tied to validity of
            this visa. Please check your passport for the arrival endorsement
            and take note of the period of stay granted before leaving the
            checkpoint.
          </p>
        </footer>
      </div>
    </div>
  );
}
