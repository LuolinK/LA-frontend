// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('User');

// Create a new document in the collection.
db.getCollection('userdata').insertOne({
        "user": [
          {
            "userName": "Kevin",
            "passWord": "123456"
          },
          {
            "userName": "Alice",
            "passWord": "654321"
          },
          {
            "userName": "Bob",
            "passWord": "abc123"
          }
        ]
});
