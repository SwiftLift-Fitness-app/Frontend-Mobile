import { faBuildingCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
        main:{
            width:"100vw",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        body:{
            fontFamily:"\"Hanken Grotesk\", sans-serif",
            margin:"0","padding":"0"
        },
        
        main_panel:{
            width:"100vw",
            height:"100vh",
            flexDirection:"column"
        }
        ,result_screen:{
            height:"100%",
            width:"100vw",
            borderRadius:"0 0 30px 30px"
        }
        ,circle:{
            width: "20vh",
            height:"20vh"
        }
        ,panel_text:{
            width:"80%"
        }
        ,right_screen:{
            width:"35vh",
            height:"90%"
        }
        ,title1:{
            marginTop:"0.5rem"
        }
        ,result_panel:{
            width:"100%",
            height:"7vh",
            backgroundColor:"red",
            marginTop:"1em",
            borderRadius:"10px",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            fontSize:"20px"
        }
        ,button:{
            width:"100%",
            height:"7vh",
            borderRadius:"35px",
            backgroundColor:"#303a5a",
            marginTop:"1.5rem",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#f6fefe",
            fontSize:"17.5px",
            fontWeight:"500"
        }
        ,reaction:{
            backgroundColor:"#fff6f5",
            color:"#ce5b5c"
        }
        ,memory:{
            backgroundColor:"#fffbf2",
            color:"#f3bb4d"
        }
        ,verbal:{
            backgroundColor:"#f2fbfa",
            color:"#26a789"
        }
        ,visual:{
            backgroundColor:"#f3f3fd",
            color:"#242f90"
        }
        ,i:{
            marginLeft:"1rem",
            marginRight:"1rem"
        }
        ,score:{
            marginRight:"1rem",
            color:"#a2a3a5"
        }
        ,point:{
            color:"#40434f",
            fontWeight:"800"
        }
        ,button_active:{
            background:"linear-gradient(#4c22cc,#4734ee)"
        }
        ,button_hover:{
            background:"linear-gradient(#4c22cc,#4734ee)"
        }
        
})