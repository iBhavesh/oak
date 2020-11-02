var searchIndex = JSON.parse('{\
"oak_io":{"doc":"Shared data structures and functionality for inter-node…","i":[[6,"Handle","oak_io","Handle used to identify read or write channel halves.",null,null],[4,"OakStatus","","Status values exchanged as i32 values across the Node Wasm…",null,null],[13,"Unspecified","","",0,null],[13,"Ok","","Success.",0,null],[13,"ErrBadHandle","","Invalid handle provided.",0,null],[13,"ErrInvalidArgs","","Arguments invalid.",0,null],[13,"ErrChannelClosed","","Channel has been closed.",0,null],[13,"ErrBufferTooSmall","","Provided buffer was too small for operation (an output…",0,null],[13,"ErrHandleSpaceTooSmall","","Provided handle space was too small for operation (an…",0,null],[13,"ErrOutOfRange","","Argument out of valid range.",0,null],[13,"ErrInternal","","Internal error.",0,null],[13,"ErrTerminated","","Node terminated.",0,null],[13,"ErrChannelEmpty","","Channel has no messages available to read.",0,null],[13,"ErrPermissionDenied","","The node does not have sufficient permissions to perform…",0,null],[3,"Receiver","","Wrapper for a handle to the read half of a channel,…",null,null],[12,"handle","","",1,null],[3,"Sender","","Wrapper for a handle to the send half of a channel,…",null,null],[12,"handle","","",2,null],[3,"Message","","A simple holder for bytes + handles, using internally…",null,null],[12,"bytes","","",3,null],[12,"handles","","",3,null],[3,"InitWrapper","","A wrapper struct that holds an init message, plus the…",null,null],[4,"OakError","","Generic Oak error.",null,null],[13,"ProtobufDecodeError","","",4,null],[13,"ProtobufEncodeError","","",4,null],[13,"OakStatus","","",4,null],[13,"IoError","","",4,null],[0,"handle","","",null,null],[24,"HandleVisit","oak_io::handle","Automatically derives the `HandleVisit` trait for structs…",null,null],[3,"Sender","","Sender handle for an Oak channel. This type is sent over…",null,null],[12,"id","","",5,null],[3,"Receiver","","Receiver handle for an Oak channel. This type is sent over…",null,null],[12,"id","","",6,null],[3,"ReadHandle","","Wrapper for a handle to the read half of a channel.",null,null],[12,"handle","","",7,null],[3,"WriteHandle","","Wrapper for a handle to the send half of a channel.",null,null],[12,"handle","","",8,null],[5,"extract_handles","","Return all handles in `T`.",null,[[],[["vec",3],["handle",6]]]],[5,"inject_handles","","Inject handles into a message.",null,[[],[["oakerror",4],["result",4]]]],[8,"HandleVisit","","Visit all handles present in a type.",null,null],[10,"visit","","Invokes the provided closure on every handle contained in…",9,[[["fnmut",8]],["fnmut",8]]],[11,"new","oak_io","",1,[[["readhandle",3]]]],[11,"as_proto_handle","","",1,[[],["receiver",3]]],[11,"new","","",2,[[["writehandle",3]]]],[11,"as_proto_handle","","",2,[[],["sender",3]]],[8,"Decodable","","A trait for objects that can be decoded from bytes +…",null,null],[10,"decode","","",10,[[["message",3]],[["result",4],["oakerror",4]]]],[8,"Encodable","","A trait for objects that can be encoded as bytes + handles.",null,null],[10,"encode","","",11,[[],[["result",4],["message",3],["oakerror",4]]]],[14,"handle_visit_blanket_impl","","",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","oak_io::handle","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"hash","oak_io","",0,[[]]],[11,"cmp","","",0,[[["oakstatus",4]],["ordering",4]]],[11,"eq","","",0,[[["oakstatus",4]]]],[11,"partial_cmp","","",0,[[["oakstatus",4]],[["option",4],["ordering",4]]]],[11,"clone","","",0,[[],["oakstatus",4]]],[11,"default","","",0,[[],["oakstatus",4]]],[11,"fmt","","",0,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",0,[[["formatter",3]],[["error",3],["result",4]]]],[11,"decode","","",12,[[["message",3]],[["result",4],["oakerror",4]]]],[11,"encode","","",12,[[],[["result",4],["message",3],["oakerror",4]]]],[11,"visit","","",1,[[["fnmut",8]],["fnmut",8]]],[11,"visit","","",2,[[["fnmut",8]],["fnmut",8]]],[11,"from","","",4,[[["decodeerror",3]]]],[11,"from","","",4,[[["encodeerror",3]]]],[11,"from","","",4,[[["error",3]]]],[11,"from","","",4,[[["oakstatus",4]]]],[11,"from","oak_io::handle","",7,[[["handle",6]]]],[11,"from","","",8,[[["handle",6]]]],[11,"from","oak_io","",1,[[["readhandle",3]]]],[11,"clone","oak_io::handle","",5,[[],["sender",3]]],[11,"clone","","",6,[[],["receiver",3]]],[11,"clone","","",7,[[],["readhandle",3]]],[11,"clone","","",8,[[],["writehandle",3]]],[11,"clone","oak_io","",1,[[],["receiver",3]]],[11,"clone","","",2,[[],["sender",3]]],[11,"clone","","",3,[[],["message",3]]],[11,"clone","","",12,[[],["initwrapper",3]]],[11,"default","oak_io::handle","",5,[[],["sender",3]]],[11,"default","","",6,[[],["receiver",3]]],[11,"default","oak_io","",1,[[],["receiver",3]]],[11,"default","","",2,[[],["sender",3]]],[11,"eq","oak_io::handle","",5,[[["sender",3]]]],[11,"ne","","",5,[[["sender",3]]]],[11,"eq","","",6,[[["receiver",3]]]],[11,"ne","","",6,[[["receiver",3]]]],[11,"eq","","",7,[[["readhandle",3]]]],[11,"ne","","",7,[[["readhandle",3]]]],[11,"eq","","",8,[[["writehandle",3]]]],[11,"ne","","",8,[[["writehandle",3]]]],[11,"eq","oak_io","",1,[[["receiver",3]]]],[11,"ne","","",1,[[["receiver",3]]]],[11,"eq","","",2,[[["sender",3]]]],[11,"ne","","",2,[[["sender",3]]]],[11,"eq","","",3,[[["message",3]]]],[11,"ne","","",3,[[["message",3]]]],[11,"eq","","",12,[[["initwrapper",3]]]],[11,"ne","","",12,[[["initwrapper",3]]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","oak_io::handle","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",8,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","oak_io","",1,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"encode_raw","oak_io::handle","",5,[[]]],[11,"merge_field","","",5,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",5,[[]]],[11,"clear","","",5,[[]]],[11,"encode_raw","","",6,[[]]],[11,"merge_field","","",6,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",6,[[]]],[11,"clear","","",6,[[]]],[11,"encoded_len","oak_io","",1,[[]]],[11,"clear","","",1,[[]]],[11,"encode_raw","","",1,[[]]],[11,"merge_field","","",1,[[["wiretype",4],["decodecontext",3]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",2,[[]]],[11,"clear","","",2,[[]]],[11,"encode_raw","","",2,[[]]],[11,"merge_field","","",2,[[["wiretype",4],["decodecontext",3]],[["result",4],["decodeerror",3]]]],[11,"is_valid","","Returns `true` if `value` is a variant of `OakStatus`.",0,[[]]],[11,"from_i32","","Converts an `i32` to a `OakStatus`, or `None` if `value`…",0,[[],[["option",4],["oakstatus",4]]]]],"p":[[4,"OakStatus"],[3,"Receiver"],[3,"Sender"],[3,"Message"],[4,"OakError"],[3,"Sender"],[3,"Receiver"],[3,"ReadHandle"],[3,"WriteHandle"],[8,"HandleVisit"],[8,"Decodable"],[8,"Encodable"],[3,"InitWrapper"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);