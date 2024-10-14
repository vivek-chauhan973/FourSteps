// // src/pages/api/teams.js

// import Teammember from "@/models/admin/Teammember";
// import { dbConnect } from "@/utils/db";

// export default async function handler(req, res) {
//   await dbConnect(); // Ensure the DB is connected

//   if (req.method === "GET") {
//     try {
//       const teams = await team.find({});
//       res.status(200).json(teams);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch teams" });
//     }
//   } else if (req.method === "POST") {
//     const { name, designation, link } = req.body;

//     if (!name || !designation || !link) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     try {
//       const newteam = new Teammember({ name, designation, link });
//       await newteam.save();
//       res.status(201).json(newteam);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to create team" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }


// src/pages/api/teams.js

import Teammember from "@/models/admin/Teammember";
import { dbConnect } from "@/utils/db";

export default async function handler(req, res) {
  await dbConnect(); // Ensure the DB is connected

  if (req.method === "GET") {
    try {
      const teams = await Teammember.find({}); // Fixed the variable name here
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch teams" });
    }
  } else if (req.method === "POST") {
    const { name, designation, link1,link2 } = req.body;
    console.log("creted --- >  djshsdfsbdsvhbdvbfdj----> ",req.body);

    if (!name || !designation || !link1 || !link2) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const newTeamMember =await Teammember.create({ name,designation, link1,link2 });
      res.status(201).json(newTeamMember);
    } catch (error) {
      res.status(500).json({ error: "Failed to create team member" });
    }
  } else {
    const res1=await Teammember.find({});
    if(!res){
      return res.status(404).json({message:"There is no data is created "})
    }
    return res.status(200).json({message:" data is found successfully ",res1})
  }
}
