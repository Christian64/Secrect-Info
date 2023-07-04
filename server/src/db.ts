import { connect } from "mongoose";
console.log("Database");
console.log(process.env.DB_URI);
console.log("Database 2");
if (process.env.DB_URI) {
  connect(process.env.DB_URI);
}
