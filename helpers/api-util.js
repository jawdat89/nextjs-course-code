export async function getAllEvents() {
  try {
    const response = await fetch(
      "https://nextjs-course-project-5b6d9-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();

    const events = [];

    for (let key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }

    return events;
  } catch (error) {}
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
