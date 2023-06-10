function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // email validation
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    console.log("email: ", email);
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
