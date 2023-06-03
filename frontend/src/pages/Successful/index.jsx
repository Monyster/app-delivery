import React from "react";
import { PageContainer } from "../../global-styles";
import { SuccessfulContainer } from "./styles/successful";

const Successful = () => {
  return (
    <PageContainer>
      <SuccessfulContainer>
        <p>Order successful!</p>
        <p>Wait for call!</p>
      </SuccessfulContainer>
    </PageContainer>
  );
};

export default Successful;
