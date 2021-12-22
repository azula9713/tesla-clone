import styled from "styled-components";

import ProductSection from "../components/ProductSection";

function HomePage() {
  return (
    <HomeContainer>
      <ProductSection
        title="Model S"
        description="Order Online for Touchless Delivery"
        bgImage="src/app/assets/images/model-s.jpg"
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bgImage="src/app/assets/images/model-3.jpg"
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Model X"
        description="Order Online for Touchless Delivery"
        bgImage="src/app/assets/images/model-x.jpg"
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bgImage="src/app/assets/images/model-y.jpg"
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Solar Panels"
        description="Money-back guarantee. No questions asked."
        bgImage="src/app/assets/images/solar-panel.jpg"
        lBtnText="Order Now"
        rBtntext="Learn more"
      />
      <ProductSection
        title="Solar Roofs"
        description="Produce Clean Energy From Your Roof."
        bgImage="src/app/assets/images/solar-roof.jpg"
        lBtnText="Order Now"
        rBtntext="Learn more"
      />
      <ProductSection
        title="Accessories"
        description=""
        bgImage="src/app/assets/images/accessories.jpg"
        lBtnText="Shop Now"
        rBtntext=""
      />
    </HomeContainer>
  );
}

export default HomePage;

const HomeContainer = styled.div``;
