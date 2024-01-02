const Awards = require("../../../models/conferenceModule/awards");
const HttpException = require("../../../models/conferenceModule/http-exception");

class AwardsController {
  // GET /awards/conference/:id
  async getAwardsByConferenceId(id) {
    
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      // Find awards with a specific confId using the Mongoose model
      const awards = await Awards.find({ confId: id });
     return awards;
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // GET /awards
  async getAllAwards() {
    try {
      // Find all awards using the Mongoose model
      const awards = await Awards.find();
      console.log(awards);
      return awards;
      //res.json(awards);
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error"); 
    }
  }

  // GET /awards/:id
  async getAwardById(id) {
  
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      // Find an award by its _id using the Mongoose model
      const award = await Awards.findById(id);
      if (award) {
        res.json(award);
      } else {
        res.status(404).json({ error: "Award not found" });
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // POST /awards
  async createAward(newAward) {
   

    // if (!isValidAward(newAward)) {
    //   return res.status(400).json({ error: "Invalid award data" });
    // }
    try {
      // Create a new award document using the Mongoose model
      const createdAward = new Awards(newAward);
      createdAward.save();
      return createdAward;
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // PUT /awards/:id
  async updateAward(id, updatedAward) {
   
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    
    try {
      // Update an award by its _id using the Mongoose model
      const award = await Awards.findByIdAndUpdate(id, updatedAward,{new:true});
      console.log(award);
      if (!award) {
        throw new HttpException(404, "award not found");
      } 
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // DELETE /awards/:id
  async deleteAward(id) {
   
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      // Delete an award by its _id using the Mongoose model
      const award = await Awards.findByIdAndDelete(id);
      if (!award) {
        throw new HttpException(404, "award not found");
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }
}

module.exports = AwardsController;

function isValidAward(award) {
  return (
    award &&
    typeof award === "object" &&
    typeof award.id === "string" &&
    typeof award.confId === "string" &&
    typeof award.title1 === "string" &&
    (typeof award.title2 === "string" ||
      award.title2 === null ||
      award.title2 === undefined) &&
    (typeof award.description === "string" ||
      award.description === null ||
      award.description === undefined) &&
    typeof award.sequence === "number" &&
    typeof award.featured === "boolean" &&
    typeof award.new === "boolean" &&
    typeof award.hidden === "boolean" &&
    (typeof award.link === "string" ||
      award.link === null ||
      award.link === undefined) &&
    award.createdAt instanceof Date &&
    award.updatedAt instanceof Date
  );
}
