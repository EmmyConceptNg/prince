import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  styled,
} from "@mui/material";
import { useState } from "react";
import Button from "../Button";
import Text from "../Text";
import SearchInput from "../Search";
import PlusIcon from "../../../public/svgs/PlusIcon";
import { MobilePagination, Pagination } from "../Pagination";
import ViewModal from "../modals/Audits/ViewModal";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { stripHtmlTags } from "../../utils/Index";
import { LinkIcon } from "../../../public/svgs/LinkIcon";
import MessageIconClosed from "../../../public/svgs/MessageIconClosed";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MessageIconOpen from "../../../public/svgs/MessageIconOpen";
import MessageOngoing from "../../../public/svgs/MessageOngoing";
import MessageResolved from "../../../public/svgs/MessageResolved";
import DropdownIcon from "../../../public/svgs/DropdownIcon";
import CommentIcon from "../../../public/svgs/CommentIcon";

const posts = [
  {
    _id: "1",

    title: "Bagaimana cara menginstall NextJS versi 13?",
    content:
      "Halo teman-teman semuanya. Saya punya pertanyaan, tentang cara untuk menginstall NextJS versi 13, yang dimana NextJS 13 adalah versi terbaru. Saya mempunyai masalah dengan instalasi yang terbaru, saya menda.....",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
      position: "Android Developer",
    },
    createdAt: Date(),
    comments: 10,
  },
  {
    _id: "2",

    title: "Bagaimana cara menginstall NextJS versi 13?",
    content:
      "Halo teman-teman semuanya. Saya punya pertanyaan, tentang cara untuk menginstall NextJS versi 13, yang dimana NextJS 13 adalah versi terbaru. Saya mempunyai masalah dengan instalasi yang terbaru, saya menda.....",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
      position: "Android Developer",
    },
    createdAt: Date(),
    comments: 10,
  },
  {
    _id: "3",

    title: "Bagaimana cara menginstall NextJS versi 13?",
    content:
      "Halo teman-teman semuanya. Saya punya pertanyaan, tentang cara untuk menginstall NextJS versi 13, yang dimana NextJS 13 adalah versi terbaru. Saya mempunyai masalah dengan instalasi yang terbaru, saya menda.....",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
      position: "Android Developer",
    },
    createdAt: Date(),
    comments: 10,
  },
  {
    _id: "4",

    title: "Bagaimana cara menginstall NextJS versi 13?",
    content:
      "Halo teman-teman semuanya. Saya punya pertanyaan, tentang cara untuk menginstall NextJS versi 13, yang dimana NextJS 13 adalah versi terbaru. Saya mempunyai masalah dengan instalasi yang terbaru, saya menda.....",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
      position: "Android Developer",
    },
    createdAt: Date(),
    comments: 10,
  },
];

function ForumTable(props) {
  return (
    <>
      <Header />
      <Grid container justifyContent="space-between" spacing={2} sx={{ mt: 3 }}>
        <Grid item md={2} xs={12}>
          <Categories />
        </Grid>
        <Grid item md={10} xs={12}>
          <TableX />
        </Grid>
      </Grid>
    </>
  );
}

const TableX = () => {
  const [viewModal, setViewModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Stack spacing={3}>
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
              spacing={3}
              onClick={() => navigate(post?._id)}
              sx={{ cursor: "pointer" }}
              p={3}
            >
              <Stack direction="row" justifyContent="space-between">
                <Text color="#FFFFFF" fw="600" fs="15px">
                  {post.title}
                </Text>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" spacing={1} alignItems="center">
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
                    <Text color="#9AE1BC80" fw="400" fs="10px">
                      {post?.author?.position}
                    </Text>
                  </Box>
                </Stack>
                <Text color="#FFFFFF" fw="400" fs="11px">
                  2 hari yang lalu
                </Text>
              </Stack>

              <Text color="#9AE1BC" fw="400" fs="14px">
                {stripHtmlTags(post?.content).length > 100
                  ? `${stripHtmlTags(post?.content).substring(0, 100)}...`
                  : stripHtmlTags(post?.content)}
              </Text>
              <Box display="flex" alignItems="center" gap={1}>
                <Box>
                  <CommentIcon />
                </Box>
                <Text color="#FFF" fw="400" fs="12px">
                  {post?.comments} Jawaban
                </Text>
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
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
        Community Forum
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

const categories = [
  { id: 1, name: "Semua diskusi", value: "Semua diskusi" },
  { id: 2, name: "Pertanyaan saya", value: "Pertanyaan saya" },
  { id: 3, name: "Pertanyaan saya", value: "Pertanyaan saya" },
  { id: 4, name: "Pertanyaan saya", value: "Pertanyaan saya" },
  { id: 5, name: "Pertanyaan saya", value: "Pertanyaan saya" },
  { id: 6, name: "Pertanyaan saya", value: "Pertanyaan saya" },
];

export function Categories() {
  return (
    <Box>
      <Button
        width="100%"
        height="35px"
        type="button"
        to="/dashboard/support/create-ticket"
        variant="contained"
      >
        <span style={{ color: "#333333" }}>Show The most Popular</span>
      </Button>

      <Text
        color="#ffffff"
        fw="600"
        fs="15px"
        sx={{
          my: 3,
        }}
      >
        Filter
      </Text>

      <Box>
        <CustomRadioGroup categories={categories} />
      </Box>
    </Box>
  );
}

// Custom Styled Radio
const CustomRadio = styled(Radio)(({ theme }) => ({
  color: "#FFFFFF40", // Default radio color
  "&.Mui-checked": {
    color: "#2DDB81", // Checked radio color
  },
}));

// Custom Styled FormControlLabel
const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    color: "#667085", // Label color when not selected
  },
  "& .Mui-checked + .MuiFormControlLabel-label": {
    color: "#2DDB81", // Label color when selected
  },
}));

function CustomRadioGroup({ categories }) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Semua diskusi"
        name="radio-buttons-group"
      >
        {categories.map(({ id, name, value }) => (
          <CustomFormControlLabel
            key={id}
            value={value}
            control={<CustomRadio />}
            label={name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
ForumTable.propTypes = {};

export default ForumTable;
