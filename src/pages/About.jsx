// frontend/src/pages/About.jsx
import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';

function About() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Fintastic Data Solutions for FMCG Companies
        </Typography>
        <Typography variant="body1" paragraph>
          FMCG companies generate a large volume of fast-moving data...
          Fintastic Data uses modern tools and software to overcome these challenges.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Our Services
        </Typography>
        <List>
          <ListItem>Business intelligence and data visualization</ListItem>
          <ListItem>Data Science e.g., Sales forecasting and customer clustering</ListItem>
          <ListItem>
            AI applications in business, providing executive summaries across diverse data sources
          </ListItem>
          <ListItem>Workflow Automation e.g., daily reports, data handling, requests</ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Why Upgrade from Excel?
        </Typography>
        <List>
          <ListItem>
            Excel has a 1 million row limitation and starts slowing down excessively 
            around the 300,000-row mark.
          </ListItem>
          <ListItem>
            Upgrade from Excel-based manual trend analysis to automated predictive analytics...
          </ListItem>
          <ListItem>
            Transition from Excel for inventory to AI-driven systems that predict optimal stock levels...
          </ListItem>
          <ListItem>
            Shift from static Excel reports to dynamic, real-time dashboards for instant insights...
          </ListItem>
          <ListItem>
            Move from manual customer segmentation to machine learning for precise marketing...
          </ListItem>
          <ListItem>
            Replace time-consuming Excel calculations with AI algorithms...
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Our Tools and Technologies
        </Typography>
        <Typography variant="body1" paragraph>
          Power BI, Power Automate, Power Apps, Database connections (SQL, SAP, Oracle), Python, 
          API Connections...
        </Typography>

        <Typography variant="h5" gutterBottom>
          Benefits
        </Typography>
        <List>
          <ListItem>
            Leverage machine learning for precise demand forecasting and inventory optimization.
          </ListItem>
          <ListItem>Harness customer data analytics for tailored marketing and loyalty.</ListItem>
          <ListItem>
            Streamline operations with data-driven supply chain management...
          </ListItem>
          <ListItem>
            Gain a competitive edge with real-time market intelligence insights...
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Automated Solutions
        </Typography>
        <List>
          <ListItem>Automate Inventory Replenishment...</ListItem>
          <ListItem>Efficient Sales Order Processing...</ListItem>
          <ListItem>Automated Quality Control Checks...</ListItem>
          <ListItem>Targeted Marketing Campaigns...</ListItem>
          <ListItem>Real-time Supply Chain Visibility...</ListItem>
        </List>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Transform Your FMCG Operations with Fintastic Data
        </Typography>
        <Typography variant="body1" paragraph>
          The integration of AI and data analytics transforms the FMCG industry. 
          Unlock valuable insights, optimize operations, and drive growth with 
          automated predictive analytics...
        </Typography>

        <Typography variant="h5" gutterBottom>
          Get Started with Fintastic Data
        </Typography>
        <Typography variant="body1">
          Contact us today to learn more about how we can help transform your FMCG operations.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
