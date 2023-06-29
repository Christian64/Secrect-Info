import { connect } from "mongoose";
connect(String(process.env.DB_URI));
