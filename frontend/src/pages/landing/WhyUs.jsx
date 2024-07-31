import { Box, Grid, Stack } from "@mui/material";
import Text from "../../components/Text";

export default function WhyUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        pt: 20,
        px: { lg: "100px", md: "100px", xs: "10px" },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={15}
      >
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <Box
            component="img"
            src="/svgs/Laptop.svg"
            heigth="354.16px"
            width="100%"
          />
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <Box
            bgcolor="#22242F"
            width="71px"
            height="32px"
            borderRadius="99px"
            padding="8px, 16px, 8px, 16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="#2DDB81"
              fw="500"
              fs={{ md: "12px", lg: "12px", sm: "10px", xs: "10px" }}
              sx={{
                textAlign: "center",
              }}
            >
              Why?
            </Text>
          </Box>
          <Text
            color="#F4F4F6"
            ff="KyivTypeSans"
            fw="700"
            fs={{ md: "40px", lg: "40px", sm: "30px", xs: "20px" }}
          >
            Why Choose CertRiddle?
          </Text>
          <Text
            sx={{ mt: 3 }}
            color="#F4F4F6"
            fw="500"
            fs={{ md: "15px", lg: "15px", sm: "10px", xs: "10px" }}
          >
            <span style={{ color: "#2DDB81", fontWeight: "700" }}>
              Save Time & Resources:
            </span>{" "}
            No more wading through endless regulations and guidelines.
            CertRiddle streamlines the process, saving you precious time and
            resources.
          </Text>
          <Text
            sx={{ mt: 3 }}
            color="#F4F4F6"
            fw="500"
            fs={{ md: "15px", lg: "15px", sm: "10px", xs: "10px" }}
          >
            <span style={{ color: "#2DDB81", fontWeight: "700" }}>
              Tailored to Your Needs:
            </span>{" "}
            Our platform recognizes that no two startups are the same. Get
            recommendations and guidance that's relevant to your specific
            business model and industry.
          </Text>
          <Text
            sx={{ mt: 3 }}
            color="#F4F4F6"
            fw="500"
            fs={{ md: "15px", lg: "15px", sm: "10px", xs: "10px" }}
          >
            <span style={{ color: "#2DDB81", fontWeight: "700" }}>
              Expert Support:
            </span>{" "}
            With CertRiddle, you're never alone. Our platform offers expert
            advice and a community of peers to support you at every turn.
          </Text>
        </Grid>
      </Grid>

      {/* Why Us 2 */}
      <Grid
        container
        alignItems="center"
        spacing={{ md: 10, lg: 20, xs: 5 }}
        justifyContent={{ md: "space-between", xs: "center" }}
      >
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <Box
            bgcolor="#22242F"
            width="71px"
            height="32px"
            borderRadius="99px"
            padding="8px, 16px, 8px, 16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="#2DDB81"
              fw="500"
              fs={{ md: "12px", lg: "12px", sm: "10px", xs: "10px" }}
              sx={{
                textAlign: "center",
              }}
            >
              Why?
            </Text>
          </Box>
          <Text
            color="#F4F4F6"
            ff="KyivTypeSans"
            fw="700"
            fs={{ md: "40px", lg: "40px", sm: "30px", xs: "20px" }}
          >
            Why Choose CertRiddle?
          </Text>
          <Text
            sx={{ mt: 3 }}
            color="#F4F4F6"
            fw="500"
            fs={{ md: "15px", lg: "15px", sm: "10px", xs: "10px" }}
          >
            <span style={{ color: "#2DDB81", fontWeight: "700" }}>
              Save Time & Resources:
            </span>{" "}
            No more wading through endless regulations and guidelines.
            CertRiddle streamlines the process, saving you precious time and
            resources.
          </Text>
          <Text
            sx={{ mt: 3 }}
            color="#F4F4F6"
            fw="500"
            fs={{ md: "15px", lg: "15px", sm: "10px", xs: "10px" }}
          >
            <span style={{ color: "#2DDB81", fontWeight: "700" }}>
              Tailored to Your Needs:
            </span>{" "}
            Our platform recognizes that no two startups are the same. Get
            recommendations and guidance that's relevant to your specific
            business model and industry.
          </Text>
          <Text
            sx={{ mt: 3 }}
            color="#F4F4F6"
            fw="500"
            fs={{ md: "15px", lg: "15px", sm: "10px", xs: "10px" }}
          >
            <span style={{ color: "#2DDB81", fontWeight: "700" }}>
              Expert Support:
            </span>{" "}
            With CertRiddle, you're never alone. Our platform offers expert
            advice and a community of peers to support you at every turn.
          </Text>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <Box
            component="img"
            src="/svgs/Iphone.svg"
            heigth="471.87px"
            width="100%"
          />
        </Grid>
      </Grid>
    </Box>
  );
}