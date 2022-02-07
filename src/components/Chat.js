import React, { useEffect } from "react";
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";

import config from "../private/config";

const Chat = (props) => {
	useEffect(() => {
		if (!props.user) window.location = "/login";
	});
	return (
		<div>
			<ChatEngineWrapper>
				<Socket
					projectID={config.CHATENGINE_PROJECT_ID}
					userName={props.user.username}
					userSecret={props.user._id}
				/>
				<ChatFeed
					activeChat={config.CHATENGINE_CHAT_ID}
					renderChatHeader={() => {}}
				/>
			</ChatEngineWrapper>
		</div>
	);
};

export default Chat;
