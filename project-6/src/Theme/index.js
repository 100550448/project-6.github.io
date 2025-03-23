import { extendTheme, withDefaultColorScheme} from "@chakra-ui/react";
import { color } from "framer-motion";




export const theme = extendTheme({
  colors: {
    purple:{
      500:"#5F00D9",
    },
    P:{
    purple: "#5F00D9",
    black: "#171717"
  },
  black:{
      5: "#F3F3F7",
      10: "#EEEEF4",
      20: "#D8DDE2",
      40: "#BABAC4",
      60: "#797E82",
      80: "#535D66",
  }
    
} , 
    fonts: {
        heading: "Ubuntu",
        body: "Ubuntu",
      },

      textStyles:{
        h1:{
          fontsize:{base: "30px", md: "32px",},
          color: "p.black",
          lineHeight:{base: "34px", md: "36px",}
          },
           
        
          h2:{
            fontsize:{base: "24px", md: "28px",},
            color: "p.black",
            lineHeight: {base: "28px", md: "32px",}
            },

            h3:{
              fontsize:{base: "22px", md: "24px",},
              color: "p.black",
              lineHeight:{base: "24px", md: "26px",}
              },

              h4:{
                fontsize:{base: "20px", md: "22px",},
                color: "p.black",
                lineHeight:{base: "24px", md: "26px",}
                },

                h5:{
                  fontsize:{base: "18px", md: "20px",},
                  color: "p.black",
                  lineHeight:{base: "22px", md: "24px",}
                  },

                  h6:{
                    fontsize:{base: "16px", md: "18px",},
                    color: "p.black",
                    lineHeight:{base: "20px", md: "22px",}
                    },
                  
      },

      fontSizes: {
          xs: "12px",
          sm: "14px",
          base: {base: "16px" , md: "18px"},
          lg: {base: "18px" , md: "20px"},
          xl: {base: "20px" , md: "22px"},
          "2xl": {base: "22px" , md: "24px"},
          "3xl": {base: "24px" , md: "28px"},
          "4xl": {base: "30px" , md: "32px"},
      
        },

      styles: {
        global: {
          body: {
            bg: '#F3F3F7',
            
          },
        },
      },

      Components:{
        Button: {
          baseStyle:{
            fontWeight: "bold",
            borderRadius:  "10px",
            
          },  
        },

        FormLabel: {
          baseStyle: {
            fontsize: "sm",
            color: "red",
          },
        },

        Input:{

          variants:{
            outline:{
              field:{
                h: "38px",
            borderRadius: "8px",
            fontsize: "sm",
              
            _focus:{
              boxShadow: "0 0 0 1px #5F00D9 ",
            },
              },
            },
          },
          
        },
      },
    },
     withDefaultColorScheme({ colorScheme: "purple" })
      );