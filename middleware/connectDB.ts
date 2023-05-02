import mongoose from "mongoose";

const connectDB = (handler: any) => async (req: any, res: any) => {
	if (mongoose.connections[0].readyState) {
		// Use current db connection
		return handler(req, res);
	}
	// Use new db connection
	await mongoose.connect("mongodb://localhost/conectNext");
	return handler(req, res);
};

export default connectDB;
