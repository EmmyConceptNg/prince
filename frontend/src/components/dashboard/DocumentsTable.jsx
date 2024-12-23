import PropTypes from "prop-types";
import {
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

function DocumentsTable(props) {
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
    <>
      <Box
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
        }}
        p={{ md: 3, xs: 1 }}
      >
        <Grid container>
          {Array(8)
            .fill(data)
            .map((item) => (
              <Grid key={item} md={3} xs={12} sx={{ p: 2 }}>
                <Box
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid #10281B",
                    background: "#0C0E0D",
                  }}
                >
                  <Box
                    component="img"
                    width="100%"
                    src={`/svgs/${item.image}`}
                    sx={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <Box sx={{ padding: 2 }}>
                    <Box display="flex" justifyContent="space-between">
                      <Text fs="18px" fw="700" color="#fff">
                        {item.name}
                      </Text>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <EyeIcon />
                        <DeleteIcon />
                      </Stack>
                    </Box>
                    <Text fs="10px" fw="500" color="#FFFFFFA6">
                      {item.subText}
                    </Text>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Text fs="11px" fw="500" color="#FFFFFF4D">
                        Issued
                      </Text>
                      <Text fs="11px" fw="600" color="#FFFFFF">
                        {item.issued}
                      </Text>
                      <Divider sx={{ bgcolor: "#2DDB81", width: '14px' }} />
                      <Text fs="11px" fw="500" color="#FFFFFF4D">
                        Valid till
                      </Text>
                      <Text fs="11px" fw="600" color="#FFFFFF">
                        {item.valid}
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box mt={8} display={{ md: "flex", xs: "none" }} width="100%">
        <Pagination />
      </Box>
      <Box
        mt={5}
        display={{ md: "none", xs: "flex" }}
        flexDirection="column"
        width="100%"
      >
        <MobilePagination />
      </Box>
      {viewModal && <ViewModal open={viewModal} setOpen={setViewModal} />}
    </>
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
        My Document
      </Text>

      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "flex-start" }}
        justifyContent="flex-start"
        gap={2}
      >
        <SearchInput width="250px" height="45px" placeholder="Search" />
        <Button
          width="200px"
          height="45px"
          type="button"
          startIcon={<PlusIcon />}
          to="/dashboard/audits/create"
          variant="contained"
        >
          <span style={{ color: "#333333" }}>Upload Document</span>
        </Button>
      </Box>
    </Box>
  );
}

DocumentsTable.propTypes = {};

export default DocumentsTable;
