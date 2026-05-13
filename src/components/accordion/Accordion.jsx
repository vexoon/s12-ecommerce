import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { categoryData } from "../../data";
import ProductCard from "../productCard/ProductCard";

export default function AccordionX() {
  const flexStyle = {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "20px 0",
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 900, margin: "20px auto" }}>
      {categoryData.map((category) => (
        <Accordion
          key={category.id}
          sx={{
            backgroundColor: "#252525",
            color: "white",
            mb: 0.1,
            borderRadius: "8px !important",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`${category.id}-content`}
            id={`${category.id}-header`}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              {category.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{ backgroundColor: "#1a1a1a", borderRadius: "0 0 8px 8px" }}
          >
            <Box sx={flexStyle}>
              {category.items.map((product) => (
                <ProductCard key={product.id} item={product} />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
