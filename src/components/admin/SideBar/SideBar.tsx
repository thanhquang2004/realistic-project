import {
  Box,
  Icon,
  IconButton,
  SvgIcon,
  Theme,
  Typography,
} from "@mui/material";
import SideBarBody from "./SideBarBody/SideBarBody";

function SideBar() {
  const SIDE_BAR_WIDTH = "253px";
  const SIDE_BAR_FOOTER_HEIGHT = "51px";
  const SIDE_BAR_BODY_HEIGHT = (theme: Theme) =>
    `calc(100vh - ${theme.customVars.headerHeight} - ${SIDE_BAR_FOOTER_HEIGHT})`;

  console.log(SIDE_BAR_BODY_HEIGHT);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: SIDE_BAR_WIDTH,
        height: "100vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "22px",
          paddingLeft: "19px",
          height: (theme) => theme.customVars.headerHeight,
          backgroundColor: "#0FA4C5",
        }}
      >
        <Typography variant="h6" color="white" fontSize="16px" fontWeight="700">
          CMS LOGO
        </Typography>
        <IconButton>
          <img src="/src/assets/li_menu.svg" alt="menu" sizes="16px"></img>
        </IconButton>
      </Box>
      <SideBarBody SIDE_BAR_BODY_HEIGHT={SIDE_BAR_BODY_HEIGHT} />
      <Box
        sx={{
          height: SIDE_BAR_FOOTER_HEIGHT,
          backgroundColor: "rgba(153, 199, 247, 0.25)",
        }}
      >
        End
      </Box>
    </Box>
  );
}

export default SideBar;
