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
import Online from "../../../public/svgs/Online";

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

function WebinarsTable(props) {
  return (
    <>
      <Header />

      <TableX />
    </>
  );
}

const TableX = () => {
  const [viewModal, setViewModal] = useState(false);

  const data = {
    name: "Interesting webinar name",
    status: "ONLINE",
    date: "20.04.23",
    time: "18:30 PM GMP+2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tellus accumsan, faucibus orci ac, fringilla est. Etiam vulputate eros id felis egestas luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tellus accumsan, faucibus orci ac, fringilla est. Etiam vulputate eros id felis egestas luctus. ",
  };
  return (
    <>
      <Box>
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
              <Box
                key={item}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #10281B",
                  background: "#0C0E0D",
                  marginRight: 3,
                }}
              >
                <Stack spacing={3} sx={{ padding: 2 }}>
                  <Box display="flex" flexDirection={{ md: 'row', xs:'column' }} justifyContent="space-between" alignItems="flex-start">
                    <Stack spacing={2} alignItems="flex-start">
                      <Text fs="24px" fw="700" color="#fff">
                        {item.name}
                      </Text>
                      <Stack direction="row" spacing={6}>
                        <Text fs="15px" fw="400" color="#FFFFFFBF">
                          {item.date}
                        </Text>
                        <Text fs="15px" fw="400" color="#FFFFFFBF">
                          {item.time}
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Text fs="18px" fw="700" color="#FF4444">
                        {item.status}
                      </Text>
                      <Online />
                    </Stack>
                  </Box>
                  <Text fs="13px" fw="400" color="#FFFFFF">
                    {item.description}
                  </Text>
                  <Button variant="contained">
                    <span style={{ color: "#333333" }}>Watch now</span>
                  </Button>
                </Stack>
              </Box>
            ))}
        </Carousel>
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
      <Text fs="30px" fw="700" sx={{ color: "#fff" }}>
        Webinars
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
  );
}

WebinarsTable.propTypes = {};

export default WebinarsTable;
