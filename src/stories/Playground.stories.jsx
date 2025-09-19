import React from "react";
import ButtonA from "../components/atoms/Buttons/ButtonA";
// import Types from "../components/protons/Types";
import ImageA from "../components/atoms/Images/ImageA";
import StackA from "../components/layout/Containers/StackA";
import GridA from "../components/layout/Containers/GridA";
import FlexA from "../components/layout/Containers/FlexA";
import Divider from '@mui/material/Divider';
import CardA from "../components/molecules/CardA";
import HeaderXL from "../components/layout/Headers/HeaderXL/HeaderXL";

export default {
  title: "Playground",
};

export const Demo = () => (
  <>
    {/* <ButtonA variant="contained" color="#c2c2c2" label="Click" width={150} height={50} background="#EFF2F9" border={"10px"} shadow="outher20" /> */}
    {/* <Types></Types> */}
    {/* <ImageA
    src="src/assets/react.svg"
    width={100}
    ></ImageA> */}
    {/* <StackA direction="row" spacing={2} background="#ccc" borderRadius={30} border="2px solid #000" justifyContent="center" gap={2} shadow="outher20">
      <ButtonA label="Botón 1" width={100} height={40} variant="contained" />
      <ButtonA label="Botón 2" width={100} height={40} variant="outlined" />
      <ButtonA label="Botón 3" width={100} height={40} variant="outlined" />
    </StackA>
    <Divider sx={{ margin: 5 }}></Divider>
    <GridA columns={12} spacing={2} background="#ccc" borderRadius={30} border="2px solid #000" justifyContent="center" gap={2} shadow="outher10">
      <GridA item size={6}>
        <ButtonA label="Botón Grid 1" width={100} height={40} variant="contained" />
      </GridA>
      <GridA item size={6}>
        <ButtonA label="Botón Grid 2" width={100} height={40} variant="outlined" />
      </GridA>
    </GridA>
    <Divider sx={{ margin: 5 }}></Divider>*/}

    {/* <FlexA justifyContent="center" gap={2} shadow="inner">
    <CardA
      background="#F0E7DA"
      color="#000"
      helperText="Pinterest Palette 2025"
      title="Choco Cherry"
      description="lorem ipsum dolor scing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      />
    <CardA
      background="#B0A6DF"
      color="#000"
      helperText="Pinterest Palette 2025"
      title="Aura Indigo"
      description="lorem ipsum dolor scing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      />
    <CardA
      background="#4E6813"
      color="#FFF"
      helperText="Pinterest Palette 2025"
      title="Dill Green"
      description="lorem ipsum dolor scing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      />
      </FlexA>  */}

      <HeaderXL
        title="Welcome"
        subtitle="This is a space to test and showcase various components and layouts." 
        description="Feel free to experiment with different configurations and styles to see how they work together."
        color="#3A4B41"
        background="#e6cfa7"
      />
      <HeaderXL
        title="Welcome"
        subtitle="This is a space to test and showcase various components and layouts." 
        description="Feel free to experiment with different configurations and styles to see how they work together."
        color="#e6cfa7"
        background="#3A4B41"
      />
  </>
);
