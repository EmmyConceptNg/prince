import { Box, Divider, List, ListItem } from "@mui/material";
import Text from "../../components/Text";

export function Content() {
  return (
    <>
      <Box mx={{ xs: 2, md: 10 }} mt={{ xs: 5, md: 5 }}>
        {/* Title */}
        <Text
          color="#fff"
          ff="KyivTypeSans"
          fw="700"
          fs={{ md: "36px", lg: "36px", sm: "36px", xs: "36px" }}
          sx={{
            textAlign: "left",
            mb: 5,
          }}
        >
          Privacy Policy for CertRiddle
        </Text>

        {/* Ent title */}

        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Effective Date: <span style={{ color: "#2DDB81" }}>20.04.2024</span>
        </Text>
        {/* end sub title */}

        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          Welcome to CertRiddle, a subsidiary of Simplified Cybersecurity
          Consulting Ltd ("CertRiddle," "we," "us," or "our"). Your privacy is
          paramount to us. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website
          [insert website address], our mobile application, and our services
          (collectively, "Services"). Please read this privacy policy carefully.
          If you do not agree with the terms of this privacy policy, please do
          not access the Services.
        </Text>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Information We Collect
        </Text>
        {/* end sub title */}

        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          We may collect information about you in a variety of ways. The
          information we may collect via the Services includes:
        </Text>
        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Personal Data: Personally identifiable information, such as your name,
          email address, company name, and position, that you voluntarily give
          to us when you register with the Services or when you choose to
          participate in various activities related to the Services.`,
            `Derivative Data: Information our servers automatically collect when you access
          the Services, such as your IP address, browser type, operating system,
          access times, and the pages you have viewed directly before and after
          accessing the Services.`,
            `Financial Data: Financial information, such as data related to your
          payment method (e.g., valid credit card number, card brand, expiration
          date) that we may collect when you purchase, order, return, exchange,
          or request information about our services from the Services.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          How We Use Your Information
        </Text>
        {/* end sub title */}
        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          We use the information collected about you via the Services to:
        </Text>

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Provide, operate, and maintain our Services.`,
            `Improve, personalise, and expand our Services.`,
            `Understand and analyse how you use our Services.`,
            `Develop new products, services, features, and functionality.`,
            `Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Services, and for marketing and promotional purposes.`,
            `Process your transactions and send you related information, including confirmations and invoices.`,
            `Send you technical notices, updates, security alerts, and support and administrative messages.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          How We Share Your Information
        </Text>
        {/* end sub title */}
        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </Text>

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `<span style="color: #2DDB81;">By Law or to Protect Rights:</span> If we
        believe the release of information about you is necessary to respond to
        legal process, to investigate or remedy potential violations of our
        policies, or to protect the rights, property, and safety of others, we
        may share your information as permitted or required by any applicable
        law, rule, or regulation.`,
            `<span style="color: #2DDB81;">Third-Party Service Providers: </span>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.`,
            `<span style="color: #2DDB81;">Marketing Communications: </span>With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              <Box
                component="span"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Security of Your Information
        </Text>
        {/* end sub title */}
        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </Text>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Your Rights
        </Text>
        {/* end sub title */}
        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          Depending on your location, you may have certain rights under
          applicable data protection laws, including the right to access,
          correct, or delete the personal information we have about you.
        </Text>
        {/* end content */}
      </Box>
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Contact Us
        </Text>
        {/* end sub title */}
        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          If you have questions or comments about this Privacy Policy, please
          contact us at:{" "}
          <span style={{ color: "#2DDB81", fontWeight: "500" }}>
            info@certriddle.com
          </span>
        </Text>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
    </>
  );
}
