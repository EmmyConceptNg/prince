import PropTypes from "prop-types";
import { Box, Stack, styled } from "@mui/material";
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

const posts = [
  {
    _id: "1",
    name: "Ticket# 2023-CS123",
    title: "How to deposit money to my portal?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "ongoing",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
  {
    _id: "1",
    name: "Ticket# 2023-CS123",
    title: "How to deposit money to my portal?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "ongoing",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
  {
    _id: "1",
    name: "Ticket# 2023-CS123",
    title: "How to deposit money to my portal?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "resolved",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
  {
    _id: "1",
    name: "Ticket# 2023-CS123",
    title: "How to deposit money to my portal?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "new",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
  {
    _id: "1",
    name: "Ticket# 2023-CS123",
    title: "How to deposit money to my portal?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "ongoing",
    author: {
      name: "Natali Craig",
      image: "/svgs/article-img.svg",
    },
    createdAt: Date(),
  },
];

function SupportTable({admin}) {
  return (
    <>
      <Header admin={admin} />
      <TicketTabs admin={admin} />
    </>
  );
}

const TableX = ({ type = "all" }) => {
  const [viewModal, setViewModal] = useState(false);
  const navigate = useNavigate();

  // Filter posts based on the type
  const filteredPosts =
    type === "all"
      ? posts
      : posts.filter(
          (post) => post.status.toLowerCase() === type.toLowerCase()
        );

  return (
    <>
      <Stack spacing={3}>
        {filteredPosts.map((post) => (
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
                <Stack direction="row" spacing={2}>
                  <Box
                    width="22px"
                    height="22px"
                    bgcolor={
                      post.status.toLowerCase() === "ongoing"
                        ? "#F8A534"
                        : post.status.toLowerCase() === "new"
                        ? "#3B8AFF"
                        : post.status.toLowerCase() === "resolved"
                        ? "#54C104"
                        : null
                    }
                    borderRadius="100%"
                  />
                  <Text color="#FFFFFF" fw="600" fs="18px">
                    {post.name}
                  </Text>
                </Stack>
                <Text color="#84818A" fw="500" fs="12px">
                  {`Posted at ${moment(post.createdAt).format("H:m A")}`}
                </Text>
              </Stack>

              <Stack item md={4} sx={12} spacing={2}>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Text color="#fff" fw="500" fs="14px">
                    {post.title}
                  </Text>
                </Box>
                <Text color="#9AE1BC" fw="400" fs="14px">
                  {stripHtmlTags(post?.content).length > 100
                    ? `${stripHtmlTags(post?.content).substring(0, 100)}...`
                    : stripHtmlTags(post?.content)}
                </Text>
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
                    </Box>
                  </Stack>
                  <Text
                    color="#2DDB81"
                    sx={{ textDecoration: "underline" }}
                    fw="400"
                    fs="14px"
                  >
                    Open Ticket
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>
      {viewModal && <ViewModal open={viewModal} setOpen={setViewModal} />}
    </>
  );
};

function Header({admin}) {
  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        {admin ? "Support and Ticketing" : "Customer Support"}
      </Text>

      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "flex-start" }}
        justifyContent="flex-start"
        gap={2}
      >
        <SearchInput width="250px" height="45px" placeholder="Search" />
        {!admin && <Button
          width="180px"
          height="45px"
          type="button"
          startIcon={<PlusIcon />}
          to="/dashboard/support/create-ticket"
          variant="contained"
        >
          <span style={{ color: "#333333" }}>Open Ticket</span>
        </Button>}
      </Box>
    </Box>
  );
}

const TicketTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterPosts = () => {};

  const tabs = [
    {
      name: "All Tickets",
      icon: (selected) => <MessageIconClosed selected={selected} />,
    },
    {
      name: "New",
      icon: (selected) => <MessageIconOpen selected={selected} />,
    },
    {
      name: "On-Going",
      icon: (selected) => <MessageOngoing selected={selected} />,
    },
    {
      name: "Resolved",
      icon: (selected) => <MessageResolved selected={selected} />,
    },
  ];

  const dropdownItems = [
    {
      text: "New",
      onClick: filterPosts(),
      startIcon: (
        <Box
          width="22px"
          height="22px"
          bgcolor="#3B8AFF"
          borderRadius="100%"
        ></Box>
      ),
    },
    {
      text: "On-Going",
      onClick: filterPosts(),
      startIcon: (
        <Box
          width="22px"
          height="22px"
          bgcolor="#F8A534"
          borderRadius="100%"
        ></Box>
      ),
    },
    {
      text: "Resolved",
      onClick: filterPosts(),
      startIcon: (
        <Box
          width="22px"
          height="22px"
          bgcolor="#54C104"
          borderRadius="100%"
        ></Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((option, index) => (
            <StyledTab
              key={index}
              icon={<Box>{option.icon(value === index)}</Box>}
              iconPosition="start"
              label={option.name}
            />
          ))}
        </StyledTabs>
        <Stack direction="row" spacing={3}>
          <Button
            width="180px"
            height="45px"
            type="button"
            dropdown
            to="/dashboard/business/create"
            variant="outlined"
            color="#10281B"
            dropdownItems={dropdownItems}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <span style={{ color: "#84818A" }}>Select Priority</span>
              <DropdownIcon />
            </Box>
          </Button>
          <Button
            width="180px"
            height="45px"
            type="button"
            dropdown
            to="/dashboard/business/create"
            variant="outlined"
            color="#10281B"
            dropdownItems={dropdownItems}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <span style={{ color: "#84818A" }}>This Week</span>
              <DropdownIcon />
            </Box>
          </Button>
          
        </Stack>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TableX type="all" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableX type="new" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TableX type="ongoing" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TableX type="resolved" />
      </CustomTabPanel>
    </Box>
  );
};

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "#84818A",
  "&.Mui-selected": {
    color: "#2DDB81",
  },
  "& .MuiTab-iconWrapper": {
    marginRight: theme.spacing(1),
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#2DDB81",
  },
}));

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

SupportTable.propTypes = {};

export default SupportTable;
