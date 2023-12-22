const express = require("express");
const certificateRouter = express.Router();
// const CertificateController = require("../controllers/certificateController");
// const certificateController = new CertificateController();

// Route to create a new certificate
certificateRouter.post("/", async (req, res) => {
  try {
    await certificateController.createCertificate(req, res);
  } catch (e) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

// Route to get all certificates
certificateRouter.get("/", async (req, res) => {
  try {
    const allCertificates = await certificateController.getAllCertificates();
    res.status(200).json(allCertificates);
  } catch (e) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

// Route to get a specific certificate by ID
certificateRouter.get("/:certificateId", async (req, res) => {
  try {
    const certificateId = req.params.certificateId;
    const certificate = await certificateController.getCertificateById(certificateId);
    res.status(200).json(certificate);
  } catch (e) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

// Route to update a specific certificate by ID
certificateRouter.put('/:certificateId', async (req, res) => {
  try {
    const certificateId = req.params.certificateId;
    const updatedCertificate = req.body;
    await certificateController.updateCertificate(certificateId, updatedCertificate);
    res.status(200).json({ response: "Certificate updated successfully" });
  } catch (e) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});

// Route to delete a specific certificate by ID
certificateRouter.delete("/:certificateId", async (req, res) => {
  try {
    const certificateId = req.params.certificateId;
    await certificateController.deleteCertificateById(certificateId);
    res.status(200).json({ response: "Certificate deleted successfully" });
  } catch (e) {
    res
      .status(e?.status || 500)
      .json({ error: e?.message || "Internal Server Error" });
  }
});


module.exports = certificateRouter;