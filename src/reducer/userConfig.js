export default function userConfig(state = {}, action) {
	switch (action.type) {
		case "signInSuccess": {
            const { userName,id ,userCode} = action.data || {}
			return {
				...state,
				...action.data,
				// mobile: mobile ? maskPhone(mobile) : '',
				userName: userName,
				userId:id,
				userCode:userCode
			}
		}
		default:
			return state
	}
}
