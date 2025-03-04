import { Box } from "@mui/material";

function SideBar() {
  const SIDE_BAR_WIDTH = "253px";
  const SIDE_BAR_HEADER_HEOGHT = "57px";
  const SIDE_BAR_FOOTER_HEIGHT = "51px";
  const SIDE_BAR_BODY_HEIGHT = `calc(100vh - ${SIDE_BAR_HEADER_HEOGHT} - ${SIDE_BAR_FOOTER_HEIGHT})`;
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
          height: SIDE_BAR_HEADER_HEOGHT,
          backgroundColor: "#0FA4C5",
        }}
      >
        Header
      </Box>
      <Box
        sx={{
          height: SIDE_BAR_BODY_HEIGHT,
        }}
      >
        Body
      </Box>
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
