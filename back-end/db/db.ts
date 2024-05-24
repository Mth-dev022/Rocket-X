import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://matheuszebende6:matheus1@cluster0.3onvldi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Connected to MongoDB successfully');
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB