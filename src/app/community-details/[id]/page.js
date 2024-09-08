import React from "react";
import Cpmuntydata from "../../community/Cpmuntydata";

const Page = ({ params }) => {
  const { id } = params; // 'id' is extracted from the URL params

  return (
    <div>
      <Cpmuntydata communityId={id} userauthId={id} />
    </div>
  );
};

export default Page;
