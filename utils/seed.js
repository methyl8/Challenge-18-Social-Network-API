const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../model');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});
const testUsers = [
  {username: "testuser1", email: "testuser1@email.com"},
  {username: "testuser2", email: "testuser2@email.com"},
  {username: "testuser3", email: "testuser3@email.com"}]

  const testThoughts = [
    {username: "testuser1", thoughtText: "thought 1 has text"},
    {username: "testuser2", thoughtText: "thought 2 has text"},
    {username: "testuser3", thoughtText: "thought 3 has no text"}]
  
  await User.insertMany(testUsers)
  await Thought.insertMany(testThoughts)

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
