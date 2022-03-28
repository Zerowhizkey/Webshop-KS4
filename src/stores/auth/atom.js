import { atom } from "recoil";
import axios from "axios";

const authState = atom({
	key: "authState",
	default: {
		token: null,
		user: null,
		effects: [
			({ setSelf }) => {
				axios
					.get("https://k4backend.osuka.dev/users")
					.then((res) => setSelf(res.data))
					.catch((err) => console.log(err));
			},
		],
	},
});

export default authState;
