// const express = require("express");
// const router = express.Router();
// const OpenAI = require("openai");

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.post("/", async (req, res) => {
//   try {
//     const { ingredient } = req.body;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Give nutritional analysis for ${ingredient}. Include calories and protein.`,
//         },
//       ],
//     });

//     res.json({
//       result: response.choices[0].message.content,
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Analysis failed" });
//   }
// });

// module.exports = router;
