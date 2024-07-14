import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit : "30mb", extended:true})); //limit because we are going to send images too
app.use(bodyParser.urlencoded({limit : "30mb", extended:true})); 
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Gireesh:testpass@clusterjournal.w8rhx5e.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJournal'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);


