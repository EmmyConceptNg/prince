import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import { useState } from "react";
import Button from "../Button";
import EyeIcon from "../../../public/svgs/EyeIcon";
import DeleteIcon from "../../../public/svgs/DeleteIcon";
import Text from "../Text";
import SearchInput from "../Search";
import PlusIcon from "../../../public/svgs/PlusIcon";
import { MobilePagination, Pagination } from "../Pagination";
import ViewModal from "../modals/Audits/ViewModal";
import ReloadIcon from "../../../public/svgs/ReloadIcon";
import ResetIcon from "../../../public/svgs/ResetIcon";

function ContentsTable(props) {
  return (
    <>
      <Header />

      <TableX />
    </>
  );
}

const TableX = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const [viewModal, setViewModal] = useState(false);

  const data = {
    image: "id-card.svg",
    name: "Document name",
    subText: "Subtext displayed here",
    issued: "20.04.23",
    valid: "24.04.23",
  };
  return (
    <Stack direction={{ md: "row", xs: "column " }} spacing={3}>
      <Box
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
          flexGrow: 1,
        }}
        p={{ md: 3, xs: 1 }}
      >
        <Stack spacing={2}>
          {Array(8)
            .fill(data)
            .map((item) => (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                key={item}
                sx={{ p: 2 }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    sx={{
                      border: "1px solid #9AE1BC",
                      background: "#10281B",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <ReloadIcon />
                  </Avatar>
                  <Text fs="18px" fw="500" color="#FFFFFF">
                    Update Name 89134
                  </Text>
                </Box>
                <Text
                  fs="18px"
                  fw="500"
                  color="#2DDB81"
                  sx={{ textDecoration: "underline", cursor: 'pointer' }}
                >
                  What's New?
                </Text>
              </Stack>
            ))}
        </Stack>
      </Box>
      <Box
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
          flexGrow: 1,
        }}
        p={{ md: 3, xs: 1 }}
      >
        <Stack spacing={2}>
          {Array(8)
            .fill(data)
            .map((item) => (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                key={item}
                sx={{ p: 2 }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    sx={{
                      border: "1px solid #9AE1BC",
                      background: "#10281B",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <ResetIcon />
                  </Avatar>
                  <Box>
                    <Text fs="18px" fw="500" color="#FFFFFF">
                      Update Name 89134
                    </Text>
                    <Text fs="16px" fw="400" color="#FFFFFF73">
                      24.02 | 16:35 PM
                    </Text>
                  </Box>
                </Box>
                <Text
                  fs="18px"
                  fw="500"
                  color="#2DDB81"
                  sx={{ textDecoration: "underline", cursor: 'pointer' }}
                >
                  What's New?
                </Text>
              </Stack>
            ))}
        </Stack>
      </Box>
    </Stack>
  );
};

function Header() {
  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        Content Updates
      </Text>
    </Box>
  );
}

ContentsTable.propTypes = {};

export default ContentsTable;
