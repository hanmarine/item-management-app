import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "next/link";

// Product Card Template
export default function ProductCard({ id, title, price }) {
  return (
    <Card
      sx={{
        height: "100%",
        minHeight: 180,         
        maxWidth: 300,  
        minWidth: 300,  
        boxShadow: 3,
        borderRadius: "10px",      
        width: "100%",            
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom fontWeight="bold" variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/item/${id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
