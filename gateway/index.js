import axios from 'axios';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const PORT = process.env.GATEWAY_PORT || 3001;

app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));
app.use(express.json());

// ==========================================
// UŽIVATEL / USER (user_service: 4001)
// ==========================================

// USER CREATE
app.post("/user", async (req, res) => {
  try {
  const response = await axios.post(
    "http://localhost:4001/user/create",
    req.body,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// USER GET BY ID
app.get("/user/:id", async (req, res) => {
  try {
  const response = await axios.get(
    `http://localhost:4001/user/${req.params.id}`,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// USER LIST BY FILTERS
app.get("/user", async (req, res) => {
  try {
  const response = await axios.get(
    `http://localhost:4001/user`,
    {
      params: req.query,
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// USER UPDATE BY ID
app.put("/user/:id", async (req, res) => {
  try {
  const response = await axios.put(
  `http://localhost:4001/user/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})


// ==========================================
// SERVISY / SERVICES (user_service: 4001)
// ==========================================

// SERVICE CREATE
app.post("/service", async (req, res) => {
  try {
  const response = await axios.post(
    "http://localhost:4001/service/create",
    req.body,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// SERVICE GET BY ID
app.get("/service/:id", async (req, res) => {
  try {
  const response = await axios.get(
    `http://localhost:4001/service/${req.params.id}`,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// SERVICE LIST BY FILTERS
app.get("/service", async (req, res) => {
  try {
  const response = await axios.get(
    `http://localhost:4001/service`,
    {
      params: req.query,
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// SERVICE UPDATE BY ID
app.put("/service/:id", async (req, res) => {
  try {
  const response = await axios.put(
  `http://localhost:4001/service/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// ==========================================
// CATEGORIE / CATEGORY (user_service: 4001)
// ==========================================

// CATEGORY CREATE
app.post("/category", async (req, res) => {
  try {
  const response = await axios.post(
    "http://localhost:4001/category/create",
    req.body,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// CATEGORY GET BY ID
app.get("/category/:id", async (req, res) => {
  try {
  const response = await axios.get(
    `http://localhost:4001/category/${req.params.id}`,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// CATEGORY LIST
app.get("/category", async (req, res) => {
  try {
  const response = await axios.get(
    `http://localhost:4001/category`,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// CATEGORY UPDATE BY ID
app.put("/category/:id", async (req, res) => {
  try {
  const response = await axios.put(
  `http://localhost:4001/category/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: null
      }});
  res.status(response.status).json(response.data);
    }
  catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || {});
  }
})

// ==========================================
// REZERVACE / RESERVATIONS (reservation_service: 3004)
// ==========================================

// RESERVATION CREATE
app.post("/reservation", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:3004/reservation/create", 
      req.body,
      {
      headers: {
        Authorization: null
      }}
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s reservation_service" });
  }
});

// RESERVATION GET BY ID
app.get("/reservation/:id", async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3004/reservation/${req.params.id}`,
      {
      headers: {
        Authorization: null
      }}
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s reservation_service" });
  }
});

// RESERVATION GET LIST BY FILTERS
app.get("/reservation", async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3004/reservation`,
      {
      params: req.query,
      headers: {
        Authorization: null
      }}
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s reservation_service" });
  }
});

// RESERVATION UPDATE BY ID
app.put("/reservation/:id", async (req, res) => {
  try {
    const response = await axios.put(`http://localhost:3004/reservation/${req.params.id}`, 
      req.body,
      {
      headers: {
        Authorization: null
      }}
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s reservation_service" });
  }
});

// RESERVATION DELETE BY ID
app.delete("/reservation/:id", async (req, res) => {
  try {
    const response = await axios.delete(`http://localhost:3004/reservation/${req.params.id}`,
      {
      headers: {
        Authorization: null
      }}
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s reservation_service" });
  }
});

// ==========================================
// FEATURE (feature_service: 4002)
// ==========================================

// FEATURE CREATE
app.post("/feature", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:4002/feature", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s feature_service" });
  }
});

// FEATURE GET BY ID
app.get("/feature/:id", async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:4002/feature/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s feature_service" });
  }
});

// FEATURE LIST BY SERVICE ID
app.get("/feature/service/:serviceId", async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:4002/feature/service/${req.params.serviceId}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s feature_service" });
  }
});

// FEATURE UPDATE BY ID
app.put("/feature/:id", async (req, res) => {
  try {
    const response = await axios.put(`http://localhost:4002/feature/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s feature_service" });
  }
});

// FEATURE DELETE BY ID
app.delete("/feature/:id", async (req, res) => {
  try {
    const response = await axios.delete(`http://localhost:4002/feature/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Chyba komunikace s feature_service" });
  }
});



app.listen(PORT, () => {
  console.log(`Gateway ${PORT}`);
});