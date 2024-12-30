import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Form, Formik } from "formik";
import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";
import StartChatIcon from "../../../../public/svgs/StartChatIcon";
import SearchInput from "../../../components/Search";

export default function Messages() {
  return (
    <Stack spacing={20}>
      <ChatApp />
    </Stack>
  );
}

const ChatApp = () => {
  const [selectedFriend, setSelectedFriend] = useState("John");
  const [messages, setMessages] = useState([
    { sender: "John", text: "Hi there!" },
    { sender: "You", text: "Hey John, how's it going?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const friends = ["John", "Jane", "Alice", "Bob"];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: "You", text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "25%",
          backgroundColor: "#191919",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          border: "1px dashed #FFFFFF1A",
          borderTopLeftRadius: "15px",
          borderBottomLeftRadius: "15px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Text color="#FFFFFF" fs="18px" fw="600">
              Messages
            </Text>
            <Text color="#2DDB81" fs="12px" fw="500">
              40
            </Text>
          </Box>
          <Box>
            <StartChatIcon />
          </Box>
        </Stack>
        <SearchInput placeholder="search" />
        <List sx={{ width: "100%", color: "#fff" }}>
          {friends.map((friend) => (
            <>
              <ListItem
                key={friend}
                button
                onClick={() => setSelectedFriend(friend)}
                sx={{
                  backgroundColor:
                    selectedFriend === friend ? "transparent" : "transparent",
                  "&:hover": { backgroundColor: "#2DDB81" },
                  borderRadius: "8px",
                  marginBottom: "8px",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    color: "#fff",
                  }}
                  display="flex"
                  gap="60px"
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      color: "#fff",
                    }}
                    display="flex"
                    gap={2}
                    alignItems="flex-start"
                  >
                    <Avatar
                      sx={{
                        backgroundColor: "#A2A8CD",
                        width: "56px",
                        height: "56px",
                      }}
                      src="/svgs/default-img.svg"
                    />
                    <Box>
                      <Box
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                      >
                        <Text fw="600" fs="18px">
                          {friend}
                        </Text>
                      </Box>
                      <Text fw="400" fs="14px" color="#FFFFFFB2">
                        @{friend}
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    <Text fw="400" fs="14px" color="#FFFFFFB2">
                      5min ago
                    </Text>
                  </Box>
                </Box>
                <Text fs="14px" fw="400" color="#FFFFFFB2">
                  Hey Olivia, Katherine sent me over the latest doc. I just have
                  a quick question about the...
                </Text>
              </ListItem>
              <Divider sx={{ background: "#FFFFFF1A" }} />
            </>
          ))}
        </List>
      </Box>

      {/* Chat Area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          backgroundColor: "#191919",

          border: "1px dashed #FFFFFF1A",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        {/* Chat Header */}
        <Box
          sx={{
            padding: "16px",
            backgroundColor: "#191919",
            color: "#fff",
          }}
          display="flex"
          gap={2}
          alignItems="center"
        >
          <Avatar
            sx={{ backgroundColor: "#A2A8CD", width: "56px", height: "56px" }}
            src="/svgs/default-img.svg"
          />
          <Box>
            <Box display="flex" gap={2} alignItems="center">
              <Text fw="600" fs="18px">
                {selectedFriend}
              </Text>
              <Box display="flex" gap="5px" alignItems="center">
                <Box
                  width="6px"
                  height="6px"
                  bgcolor="#12B76A"
                  borderRadius="100%"
                />
                <Text fw="500" fs="12px" color="#2DDB81">
                  online
                </Text>
              </Box>
            </Box>
            <Text fw="400" fs="14px" color="#FFFFFFB2">
              @{selectedFriend}
            </Text>
          </Box>
        </Box>

        {/* Messages Area */}
        <Box
          sx={{
            flex: 1,
            padding: "16px",
            overflowY: "auto",
            backgroundColor: "#000000",
          }}
        >
          <List>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                sx={{
                  justifyContent:
                    message.sender === "You" ? "flex-end" : "flex-start",
                }}
              >
                <ListItemText
                  primary={message.text}
                  secondary={<Text color="#ffffff8a">{message.sender}</Text>}
                  sx={{
                    maxWidth: "70%",
                    padding: "8px",
                    backgroundColor:
                      message.sender === "You" ? "#10281B" : "#212121",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Input Area */}
        <Box
          sx={{
            display: "flex",
            padding: "8px",
            border: "1px solid #10281B",
            backgroundColor: "transparent",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Send a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{
              flex: 1,
              marginRight: "8px",
              background: "transparent",
              "& .MuiInputBase-input": {
                color: "#fff", // Set text color to white
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#fff", // Set placeholder color to white
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF1A", // Default outline color
                },
                "&:hover fieldset": {
                  borderColor: "#2DDB81", // Hover outline color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2DDB81", // Focused outline color
                },
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleSendMessage}
            width='67px'
            sx={{ textTransform: "none" }}
          >
            <span style={{ color: "#333333" }}>
            Send
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
