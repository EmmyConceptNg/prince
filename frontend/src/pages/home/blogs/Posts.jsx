import { LinkIcon } from "../../../../public/svgs/LinkIcon";
import { MobilePagination, Pagination } from "../../../components/Pagination";
import Text from "../../../components/Text";
import { Box, Divider, Grid, Stack } from "@mui/material";

let id = 0;
const posts = {
    id: id++,
    title: "UX review presentations",
    shortDescription:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "images/image.png",
    category: {
      name: "Design",
    },
    read: "8 min read",
    createdAt: "20 Jan 2022",
    author: {
      name: "Olivia Rhye",
      image: "authors/image.png",
    },
  };
export function Posts() {
  return (
    <Box>
      <Grid container justifyContent="space-between" spacing={3}>
        {Array(11)
          .fill(posts)
          .map((post, index) => (
            <Grid item md={index === 0 ? 12 : 6} xs={12} key={post?.id}>
              {index === 0 ? (
                <Box>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    container
                    spacing={5}
                    alignItems="center"
                  >
                    <Box
                      component="img"
                      src={post?.image}
                      sx={{ width: "100%", height: "320px" }}
                    />

                    <Stack item md={4} sx={12} spacing={2}>
                      <Text color="#fff" fw="600" fs="30px">
                        {post?.title}
                      </Text>
                      <Text color="#9AE1BC" fw="400" fs="14px">
                        {post?.shortDescription}
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
                            {post?.createdAt}
                          </Text>
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              ) : (
                <Stack spacing={5}>
                  <Box
                    component="img"
                    src={post?.image}
                    sx={{ width: "100%", height: "240px" }}
                  />

                  <Box
                    display="flex"
                    gap={1}
                    alignItems="center"
                    justifyContent="flex-start"
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
                      {post?.category?.name}
                    </Box>
                    <Text color="#2DDB81" fw="500" fs="12px">
                      {post?.read}
                    </Text>
                  </Box>

                  <Stack item md={4} sx={12} spacing={2}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text color="#fff" fw="600" fs="24px">
                        {post?.title}
                      </Text>
                      <LinkIcon />
                    </Box>
                    <Text color="#9AE1BC" fw="400" fs="16px">
                      {post?.shortDescription}
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
                          {post?.createdAt}
                        </Text>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              )}
            </Grid>
          ))}
      </Grid>
      <Box mt={8} display={{ md : 'flex', xs:'none' }}>
        <Pagination />
      </Box>
      <Box mt={5} display={{ md : 'none', xs:'flex' }} flexDirection="column">
        <Divider sx={{ bgcolor:"#fff"}}  />
        <MobilePagination />
      </Box>
    </Box>
  );
}
