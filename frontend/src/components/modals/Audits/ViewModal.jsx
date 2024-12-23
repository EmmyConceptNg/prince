import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import Text from "../../Text";
import EditIcon from "../../../../public/svgs/EditIcon";
import DownloadIcon from "../../../../public/svgs/DownloadIcon";

function ViewModal({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#0C0E0D",
            color: "#fff",
            border: "1px solid #10281B",
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fs="24px" fw="700" color="#FFFFFF">
              Example Audit Name Report
            </Text>
            <Box display="flex" alignItems="center" gap={2}>
              <EditIcon />
              <DownloadIcon />
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Total Score: 87/<span style={{ color: "#2DDB81" }}>100</span>
          </DialogContentText>
          <DialogContentText
            sx={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            tellus accumsan, faucibus orci ac, fringilla est. Etiam vulputate
            eros id felis egestas luctus. Nunc ut ligula nisl. Sed luctus nisi
            vel tellus luctus vehicula. In posuere ultricies ex, non porta quam.
            Aenean vitae semper quam. Donec eleifend, sem nec suscipit aliquet,
            nulla nibh eleifend augue, ac volutpat erat magna vel justo. Aenean
            porttitor mauris ut magna vulputate, sed lacinia mauris venenatis.
            Proin ultrices, leo non sagittis varius, lectus justo lobortis
            tortor, eu malesuada neque ligula sit amet metus. Vivamus iaculis
            mattis pulvinar. Quisque pretium nibh sit amet odio sagittis
            feugiat. Sed et consectetur turpis, id euismod risus. Praesent
            hendrerit dui id massa molestie, ac facilisis nisl elementum. Nulla
            iaculis nisl id enim sagittis, sed rutrum tortor sollicitudin.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tellus
            accumsan, faucibus orci ac, fringilla est. Etiam vulputate eros id
            felis egestas luctus. Nunc ut ligula nisl. Sed luctus nisi vel
            tellus luctus vehicula. In posuere ultricies ex, non porta quam.
            Aenean vitae semper quam. Donec eleifend, sem nec suscipit aliquet,
            nulla nibh eleifend augue, ac volutpat erat magna vel justo. Aenean
            porttitor mauris ut magna vulputate, sed lacinia mauris venenatis.
            Proin ultrices, leo non sagittis varius, lectus justo lobortis
            tortor, eu malesuada neque ligula sit amet metus. Vivamus iaculis
            mattis pulvinar. Quisque pretium nibh sit amet odio sagittis
            feugiat. Sed et consectetur turpis, id euismod risus. Praesent
            hendrerit dui id massa molestie, ac facilisis nisl elementum. Nulla
            iaculis nisl id enim sagittis, sed rutrum tortor sollicitudin.
          </DialogContentText>
          <Divider sx={{ bgcolor: "#FFFFFF33", my: "20px" }} />

          <Box>
            <Text fs="24px" fw="700" color="#FFFFFF">
              Improvements Areas
            </Text>

            <Box>
              <Grid container justifyContent="space-between">
                {Array(6)
                  .fill()
                  .map((item) => (
                    <Text
                      key={item}
                      fs="16px"
                      fw="600"
                      color="#FFFFFF"
                      sx={{ marginBottom: 2 }}
                    >
                      Example area of improvement
                    </Text>
                  ))}
              </Grid>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: "#FFFFFF33", my: "20px" }} />

          <Box>
            <Text fs="24px" fw="700" color="#FFFFFF">
              Overall Feedback
            </Text>
            <Box>
              <Text fs="14px" fw="500" color="#FFFFFF">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eget tellus accumsan, faucibus orci ac, fringilla est. Etiam
                vulputate eros id felis egestas luctus. Nunc ut ligula nisl. Sed
                luctus nisi vel tellus luctus vehicula. In posuere ultricies ex,
                non porta quam. Aenean vitae semper quam. Donec eleifend, sem
                nec suscipit aliquet, nulla nibh eleifend augue, ac volutpat er.
              </Text>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ViewModal;
