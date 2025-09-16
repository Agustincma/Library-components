import React from "react";
import ButtonA from "../components/atoms/Buttons/ButtonA";
// import Types from "../components/protons/Types";
import ImageA from "../components/atoms/Images/ImageA";
import StackA from "../components/layout/Containers/StackA";
import GridA from "../components/layout/Containers/GridA";
import FlexA from "../components/layout/Containers/FlexA";
import Divider from '@mui/material/Divider';


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
    <StackA direction="row" spacing={2} background="#ccc" borderRadius={30} border="2px solid #000" justifyContent="center" gap={2} shadow="outher20">
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
    <Divider sx={{ margin: 5 }}></Divider>
    <FlexA background="#ccc" borderRadius={30} border="2px solid #000" justifyContent="center" gap={2} shadow="inner" sx={{ gap: 16 }}>
      <ButtonA label="Botón Flex 1" width={100} height={40} variant="contained" />
      <ButtonA label="Botón Flex 2" width={100} height={40} variant="outlined" />
    </FlexA>
  </>
);
