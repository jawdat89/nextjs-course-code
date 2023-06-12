import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // email validation
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://nextjs:Ddep37D7LIC2VjGL@cluster0.wg0xb.mongodb.net/nextjs-course-newsletter?retryWrites=true&w=majority"
    );
    const db = client.db();

    await db.collection("emails").insertOne({ email: email });

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
