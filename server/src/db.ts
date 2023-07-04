import { connect } from "mongoose";
if (process.env.DB_URI) {
  connect(process.env.DB_URI);
}
