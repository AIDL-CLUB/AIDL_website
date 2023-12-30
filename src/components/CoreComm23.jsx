import React from "react";
import CommitteeMember from "./CommitteeMember";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import committeeMembersData from "./committeeMembersData.js";

const CoreComm23 = () => {
  return (
    <>
      <Container fluid className="corecomm-section" id="CORECOMMITTEE23">
        <div className="text-center pt-10">
          <p className="text-4xl font-bold text-white">
            Let's Meet the Core Committee 2023-2024
          </p>
        </div>
        <br />
        <div name="CoreComm" id="CORECOMMITTEE23" className="flex min-h-screen items-center justify-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {committeeMembersData.map((member, index) => (
              <CommitteeMember key={index} {...member} />
            ))}
          </div>
        </div>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CoreComm23;
