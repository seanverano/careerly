import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

//search jobs in feature3
router.post("/search-jobs", async (req, res) => {
  try {
    const { q, location, gl } = req.body;
    const serperHeaders = new Headers();
    serperHeaders.append("X-API-KEY", process.env.SERPER_API_KEY);
    serperHeaders.append("Content-Type", "application/json");

    const serperResponse = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: serperHeaders,
      body: JSON.stringify({ q, location, gl }),
    });

    const serperData = await serperResponse.json();

    res.json({
      jobResults: serperData.organic || [],
    });
  } catch (error) {
    console.error("Job search error:", error);
    res.status(500).json({
      message: "Failed to fetch job listings",
      error: error.message,
    });
  }
});

//locations in feature3
router.post("/search-locations", async (req, res) => {
  try {
    const { term } = req.body;

    const tomtomResponse = await fetch(
      `https://api.tomtom.com/search/2/search/${encodeURIComponent(
        term
      )}.json?` +
        new URLSearchParams({
          key: process.env.TOMTOM_API_KEY,
          language: "en-GB",
          limit: 5,
        }),
      { method: "GET" }
    );

    if (!tomtomResponse.ok) {
      throw new Error(
        `TomTom API responded with status ${tomtomResponse.status}`
      );
    }

    const tomtomData = await tomtomResponse.json();

    if (!tomtomData || !tomtomData.results) {
      console.error("Unexpected TomTom API response:", tomtomData);
      return res.status(500).json({
        message: "Unexpected response from location search",
        rawResponse: tomtomData,
      });
    }

    const locationResults = tomtomData.results.map((result) => ({
      id: result.id || null,
      name: result.address?.freeformAddress || "Unknown Location",
      type: result.type || "Unknown",
      address: {
        municipality: result.address?.municipality || "",
        countrySubdivisionName: result.address?.countrySubdivision || "",
        country: result.address?.country || "",
      },
    }));

    res.json({
      locationResults: locationResults,
    });
  } catch (error) {
    console.error("Location search error:", error);
    res.status(500).json({
      message: "Failed to fetch location data",
      error: error.message,
    });
  }
});

export default router;
