import connectDB from "../../middleware/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/userModel";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const getting = await User.find();
		res.status(200).send(getting);
	} else {
		res.status(422).send("req_method_not_supported");
	}
};

export default connectDB(handler);
