import { Box } from "@mui/material";

interface SideBarBodyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SIDE_BAR_BODY_HEIGHT: any;
}

function SideBarBody({ SIDE_BAR_BODY_HEIGHT }: SideBarBodyProps) {
  return (
    <Box
      sx={{
        height: SIDE_BAR_BODY_HEIGHT,
      }}
    >
      Body
    </Box>
  );
}

export default SideBarBody;
