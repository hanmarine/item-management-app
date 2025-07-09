"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Grid,
  Pagination,
} from "@mui/material";

import Navbar from "../components/Navbar";
import ProductCard from "../components/productCard";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:5000/api/items");

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || `HTTP error! status: ${response.status}`
          );
        }
        const data = await response.json();
        setItems(data);
        setCurrentPage(1);
      } catch (err) {
        setError(err);
        console.error("Error fetching items:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Pagination functions
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (_event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          color="text.primary"
        >
          All Services
        </Typography>

        {/* Loading Items */}
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
              gap: 2,
            }}
          >
            <CircularProgress size={60} sx={{ color: "white" }} />{" "}
            <Typography variant="h6" color="text.secondary">
              Loading items...
            </Typography>
          </Box>
        ) : error ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
              color: "error.main",
              textAlign: "center",
              p: 3,
            }}
          >
            <Typography variant="h6" color="error">
              Failed to load items.
            </Typography>
            <Typography variant="body2" color="error">
              Error details: {error.message}
            </Typography>
          </Box>
        ) : items.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No service items found yet.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Go to the "Create" page to add your first item!
            </Typography>
          </Box>
        ) : (
          <>
            <Grid
              container
              spacing={3}
              alignItems="stretch"
              justifyContent="center"
            >
              {currentItems.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={item.id}
                  sx={{ display: "flex" }}
                >
                  <ProductCard
                    id={item.id}
                    title={item.name || "Product Name"}
                    price={item.price ? item.price.toFixed(2) : "N/A"}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Pagination Component */}
            {totalPages > 1 && (
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}
              >
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "text.primary",
                    },
                    "& .MuiPaginationItem-icon": {
                      color: "text.primary",
                    },
                  }}
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </div>
  );
}
