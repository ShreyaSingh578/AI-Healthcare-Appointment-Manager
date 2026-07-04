const express = require("express");

const router = express.Router();

const {
    createDoctor,
    getDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor,
    searchDoctors
} = require("../controllers/doctorController");

const {
    protect,
    authorize
} = require("../middleware/authMiddleware");


// Logged in Users
// ADMIN
router.post("/", protect, authorize("ADMIN"), createDoctor);
router.put("/:id", protect, authorize("ADMIN"), updateDoctor);
router.delete("/:id", protect, authorize("ADMIN"), deleteDoctor);

// PUBLIC
router.get("/", getDoctors);
router.get("/search", searchDoctors);
router.get("/:id", getDoctorById);

module.exports = router;