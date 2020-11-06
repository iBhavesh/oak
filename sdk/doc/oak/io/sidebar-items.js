initSidebarItems({"fn":[["channel_create","Creates a new channel for transmission of [`Encodable`] and [`Decodable`] types."],["entrypoint_node_create","Creates a node and corresponding inbound channel of the same type, for nodes that are instantiated via the [`crate::entrypoint_command_handler`] macro."],["error_from_nonok_status","Map a non-OK [`OakStatus`] value to the nearest available [`std::io::Error`]."],["node_create","Creates a node and corresponding inbound channel of the same type, and returns [`Sender`] for such channel."],["send_init","Sends an init message over the provided [`Sender`], which is consumed by this method, and returns a [`Sender`] for subsequent commands."]],"struct":[["Message","A simple holder for bytes + handles, using internally owned buffers."],["Receiver","Wrapper for a handle to the read half of a channel, allowing to receive data that can be decoded as bytes + handles via the `Decodable` trait."],["Sender","Wrapper for a handle to the send half of a channel, allowing to send data that can be encoded as bytes + handles via the `Encodable` trait."]],"trait":[["Decodable","A trait for objects that can be decoded from bytes + handles."],["Encodable","A trait for objects that can be encoded as bytes + handles."],["ReceiverExt","SDK-specific functionality provided by a receiver."],["SenderExt","Trait for context-dependent functionality on a `Sender`."]]});