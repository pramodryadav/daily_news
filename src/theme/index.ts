import { createTheme, responsiveFontSizes} from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
      search: Palette['primary'];
    }
  
    interface PaletteOptions {
      search?: PaletteOptions['primary'];
    }
  }
declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
      "search": true;
    }
  }

let theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
        search: {
            main:"#fff"// Replace with your desired color
          },
    },
    components: {
    MuiTextField: {
        styleOverrides: {
           root:{
            width:"100%",
            
           }    
        },
        variants:[
            {
                props: { variant: 'outlined', color: 'search' },
                style: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff', // Outline border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#fff', // Hover outline border color
                    },
                    
                    '& .MuiInputBase-input': {
                      color: '#fff', // Input text color
                    },
                    
                  },
                  
                },
              },
        ]
        
      
    },
    
    
      
}

});
theme = responsiveFontSizes(theme) ;

export default theme