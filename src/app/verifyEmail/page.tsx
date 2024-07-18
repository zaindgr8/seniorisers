import React, { Suspense } from "react";
import VerifyEmail from "../authentication/Verifyemail";
const page = () => {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
};

export default page;
