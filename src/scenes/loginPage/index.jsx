// import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import Form from "./Form";

// const LoginPage = () => {
//   const theme = useTheme();
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
//   return (
//     <Box>
//       <Box
//         width="100%"
//         backgroundColor={theme.palette.background.alt}
//         p="1rem 6%"
//         textAlign="center"
//       >
//         <Typography fontWeight="bold" fontSize="32px" color="primary">
//           GeekGrid
//         </Typography>
//       </Box>

//       <Box
//         width={isNonMobileScreens ? "50%" : "93%"}
//         p="2rem"
//         m="2rem auto"
//         borderRadius="1.5rem"
//         backgroundColor={theme.palette.background.alt}
//       >
//         <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
//           Welcome to GeekGrid!!For Geeks,by Geeks!
//         </Typography>
//         <Form />
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        sx={{ backgroundColor: "#e0e0e0" }}  // Changed background color
      >
        <Typography fontWeight="bold" fontSize="32px" color="secondary">
          I-Connect
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        sx={{ backgroundColor: "#f8f8f8" }}  // Changed background color
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem", color: "text.primary" }}>
          Greetings to I-Connect!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
