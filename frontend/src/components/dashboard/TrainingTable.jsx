import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Avatar,
  AvatarGroup,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import { useState } from "react";
import Button from "../Button";
import SuitcaseIcon from "../../../public/svgs/SuitcaseIcon";
import ShieldIcon from "../../../public/svgs/ShieldIcon";
import EyeIcon from "../../../public/svgs/EyeIcon";
import DeleteIcon from "../../../public/svgs/DeleteIcon";
import EditIcon from "../../../public/svgs/EditIcon";
import Text from "../Text";
import SearchInput from "../Search";
import PlusIcon from "../../../public/svgs/PlusIcon";
import { MobilePagination, Pagination } from "../Pagination";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ViewModal from "../modals/Audits/ViewModal";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


function TrainingTable(props) {
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
    image: "vid-img.svg",
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
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          swipeable={true}
          draggable={true}
          autoPlay={true}
        >
          {Array(8)
            .fill(data)
            .map((item) => (
              <Box key={item} sx={{ display:'flex', flexDirection: 'column', gap:3 }}>
                <Text fs="20px" fw="500" color="#fff">
                  Aenean aliquet lectus vestibulum gravida
                </Text>
                <Box
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid #10281B",
                    background: "#0C0E0D",
                    marginRight: 3,
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
                </Box>
              </Box>
            ))}
        </Carousel>
      </Box>
      {viewModal && <ViewModal open={viewModal} setOpen={setViewModal} />}
    </>
  );
};

function Header() {
  return (<Box>
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        Training Materials
      </Text>

      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "flex-start" }}
        justifyContent="flex-start"
        gap={2}
      >
        <SearchInput width="250px" height="45px" placeholder="Search" />
      </Box>
    </Box>
    <Text fs="30px" fw="700" sx={{ color: "#fff", mt:3 }}>
          Useful videos
        </Text></Box>
  );
}

TrainingTable.propTypes = {};

export default TrainingTable;
