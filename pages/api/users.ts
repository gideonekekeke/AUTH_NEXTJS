import connectDB from "../../middleware/connectDB";

import User from "../../models/userModel";

const handler = async (req: any, res: any) => {
	if (req.method === "POST") {
		// Check if name, email or password is provided
		const { name, email, password } = req.body;
		if (name && email && password) {
			try {
				var user = new User({
					name,
					email,
					password,
				});
				// Create new user
				var usercreated = await user.save();
				return res.status(200).send(usercreated);
			} catch (error) {
				return res.status(500).send(error);
			}
		} else {
			res.status(422).send("data_incomplete");
		}
	} else {
		res.status(422).send("req_method_not_supported");
	}
};

export default connectDB(handler);
