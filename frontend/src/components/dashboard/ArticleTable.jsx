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
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { stripHtmlTags } from "../../utils/Index";
import { LinkIcon } from "../../../public/svgs/LinkIcon";

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

const posts = [
  {
    _id: "1",
    category: "Design",
    title: "How collaboration makes us better designers",
    content:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/svgs/article-img.svg",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
  {
    _id: "1",
    category: "Design",
    title: "How collaboration makes us better designers",
    content:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/svgs/article-img.svg",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
  {
    _id: "1",
    category: "Design",
    title: "How collaboration makes us better designers",
    content:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/svgs/article-img.svg",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
  {
    _id: "1",
    category: "Design",
    title: "How collaboration makes us better designers",
    content:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/svgs/article-img.svg",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
];

function ArticleTable(props) {
  return (
    <>
      <Header />

      <TableX />
    </>
  );
}

const TableX = () => {
  const [viewModal, setViewModal] = useState(false);
  const navigate = useNavigate();

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
          {posts.map((post) => (
            <Box
              key={post._id}
              sx={{
                borderRadius: "10px",
                border: "1px solid #10281B",
                background: "#0C0E0D",
                marginRight: 3,
              }}
            >
              <Stack
                spacing={5}
                onClick={() => navigate(post?._id)}
                sx={{ cursor: "pointer" }}
              >
                <Box
                  component="img"
                  src={post?.image}
                  sx={{ width: "100%", height: "240px", objectFit: "cover" }}
                />

                <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  justifyContent="flex-start" px={2}
                >
                  <Box
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#000",
                    }}
                    bgcolor="#2DDB81"
                    borderRadius="16px"
                    px="8px"
                    py="2px"
                  >
                    {post?.category}
                  </Box>
                  <Text color="#2DDB81" fw="500" fs="12px">
                    1 min
                  </Text>
                </Box>

                <Stack item md={4} sx={12} spacing={2} px={2}>
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="space-between"
                  >
                    <Text color="#fff" fw="600" fs="24px">
                      {post?.title}
                    </Text>
                    <LinkIcon />
                  </Box>
                  <Text color="#9AE1BC" fw="400" fs="16px">
                    {stripHtmlTags(post?.content).length > 100
                      ? `${stripHtmlTags(post?.content).substring(0, 100)}...`
                      : stripHtmlTags(post?.content)}
                  </Text>
                  <Stack direction="row" spacing={1}>
                    <Box
                      component="img"
                      src={post?.author?.image}
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "200px",
                      }}
                    />
                    <Box>
                      <Text color="#fff" fw="600" fs="14px">
                        {post?.author?.name}
                      </Text>
                      <Text color="#9AE1BC" fw="400" fs="14px">
                        {moment(post?.createdAt)?.format("MMMM D, YYYY")}
                      </Text>
                    </Box>
                  </Stack>
                </Stack>
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
        Useful Articles
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

ArticleTable.propTypes = {};

export default ArticleTable;
