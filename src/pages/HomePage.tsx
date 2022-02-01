import styled from "styled-components";

import ProductSection from "../components/ProductSection";
import ModelSImage from "../app/assets/images/model-s.jpg";
import Model3Image from "../app/assets/images/model-3.jpg";
import ModelXImage from "../app/assets/images/model-x.jpg";
import ModelYImage from "../app/assets/images/model-y.jpg";
import SolarPanelImage from "../app/assets/images/solar-panel.jpg";
import SolarRoofImage from "../app/assets/images/solar-roof.jpg";
import AccessoriesImage from "../app/assets/images/accessories.jpg";

function HomePage() {
  return (
    <HomeContainer>
      <ProductSection
        title="Model S"
        description="Order Online for Touchless Delivery"
        bgImage={ModelSImage}
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bgImage={Model3Image}
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Model X"
        description="Order Online for Touchless Delivery"
        bgImage={ModelXImage}
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bgImage={ModelYImage}
        lBtnText="Custom Order"
        rBtntext="Existing Inventory"
      />
      <ProductSection
        title="Solar Panels"
        description="Money-back guarantee. No questions asked."
        bgImage={SolarPanelImage}
        lBtnText="Order Now"
        rBtntext="Learn more"
      />
      <ProductSection
        title="Solar Roofs"
        description="Produce Clean Energy From Your Roof."
        bgImage={SolarRoofImage}
        lBtnText="Order Now"
        rBtntext="Learn more"
      />
      <ProductSection
        title="Accessories"
        description=""
        bgImage={AccessoriesImage}
        lBtnText="Shop Now"
        rBtntext=""
      />
    </HomeContainer>
  );
}

export default HomePage;

const HomeContainer = styled.div``;
