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
import FilterIcon from "../../../public/svgs/FilterIcon";
import StarIcon from "../../../public/svgs/StarIcon";

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

function FeedbackTable(props) {
  return (
    <>
      <Header />
          <TableX />
    </>
  );
}

const TableX = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid
            item
            md={4}
            xs={12}
            key={post._id}
            sx={{
              borderRadius: "10px",
              border: "1px solid #10281B",
              background: "#0C0E0D",
              marginBottom: 3,
              p:3
            }}
          >
            <Stack
              spacing={3}
              
            >
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
                    <Text color="#fff" fw="600" fs="16px">
                      {post?.author?.name}
                    </Text>
                  </Box>
                </Stack>
                <Box>
                  {Array(5)
                    .fill()
                    .map((item) => (
                      <StarIcon key={item} />
                    ))}
                </Box>
              </Stack>

              <Text color="#9AE1BC" fw="400" fs="13px" sx={{ textWrap : 'wrap' }}>
                {stripHtmlTags(post?.content).length > 100
                  ? `${stripHtmlTags(post?.content).substring(0, 100)}...`
                  : stripHtmlTags(post?.content)}
              </Text>
              <Box display="flex" alignItems="center" gap={1}>
                <Button variant="contained" >
                  <span style={{ color: "#333333" }}>Respond</span>
                </Button>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

function Header() {
  return (
    <>
      <Text fs="30px" fw="600" sx={{ color: "#fff" }}>
        Feedback & Improvements
      </Text>
      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent="space-between"
      >
        <Text fs="24px" fw="700" sx={{ color: "#fff" }}>
          Feedback Collection
        </Text>

        <Box
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          alignItems={{ md: "center", xs: "flex-start" }}
          justifyContent="flex-start"
          gap={2}
        >
          <Button
            color="#10281B"
            variant="outlined"
            height="40px"
            dropdown
            dropdownItems={[
              {
                text: "All time",
                onClick: () => {},
              },
              {
                text: "All time",
                onClick: () => {},
              },
            ]}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <FilterIcon />
              <span style={{ color: "#9AE1BC" }}>Filter</span>
            </Box>
          </Button>

          <SearchInput width="250px" height="45px" placeholder="Search" />
        </Box>
      </Box>
    </>
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
FeedbackTable.propTypes = {};

export default FeedbackTable;
