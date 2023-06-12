function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // Add server side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      !text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);

    res.status(201).json({ message: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Max",
        text: "A first comment!",
        email: "some@email.com",
      },
      {
        id: "c2",
        name: "Manuel",
        text: "A second comment!",
        email: "other@email.com",
      },
    ];
  }
}

export default handler;
