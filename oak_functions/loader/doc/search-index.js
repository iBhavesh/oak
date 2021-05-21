var searchIndex = JSON.parse('{\
"oak_functions_loader":{"doc":"","i":[[0,"proto","oak_functions_loader","",null,null],[0,"grpc_handler_server","oak_functions_loader::proto","Generated server implementations.",null,null],[3,"GrpcHandlerServer","oak_functions_loader::proto::grpc_handler_server","",null,null],[8,"GrpcHandler","","Generated trait containing gRPC methods that should be…",null,null],[10,"invoke","","",0,[[["request",3],["request",3]],[["pin",3],["box",3]]]],[11,"new","","",1,[[]]],[11,"with_interceptor","","",1,[[]]],[0,"grpc","oak_functions_loader","gRPC server for Oak Functions.",null,null],[3,"FunctionsServer","oak_functions_loader::grpc","A gRPC server with an `invoke` method to handle incoming…",null,null],[5,"handle_request","","",null,[[["wasmhandler",3],["request",3],["request",3]]]],[5,"create_and_start_grpc_server","","Starts a gRPC server on the given address, serving the…",null,[[["logger",3],["future",8],["policy",3],["socketaddr",4],["lookupdata",3],["arc",3]]]],[0,"logger","oak_functions_loader","",null,null],[3,"Logger","oak_functions_loader::logger","A simple logger that splits logging between writing logs…",null,null],[11,"new","","Creates a new logger with the specified maximum…",2,[[["levelfilter",4]]]],[11,"for_test","","Creates a new logger for testing using the debug…",2,[[]]],[11,"log_sensitive","","Logs the message at the specified `Level`, but only if the…",2,[[["level",4]]]],[11,"log_public","","Logs a message that contains only public, non-sensitive…",2,[[["level",4]]]],[0,"lookup","oak_functions_loader","",null,null],[3,"LookupData","oak_functions_loader::lookup","An in-memory lookup store instance that can refresh its…",null,null],[5,"parse_lookup_entries","","",null,[[["buf",8]],[["result",6],["hashmap",3]]]],[11,"new_empty","","Creates a new empty [`LookupData`] instance that can…",3,[[["logger",3]],["lookupdata",3]]],[11,"refresh","","Refreshes the internal entries of this struct from the…",3,[[]]],[11,"get","","Convenience getter for an individual entry that reduces…",3,[[],[["vec",3],["option",4]]]],[11,"len","","",3,[[]]],[11,"is_empty","","",3,[[]]],[0,"server","oak_functions_loader","",null,null],[3,"Policy","oak_functions_loader::server","A policy describing limits on the size of the response and…",null,null],[12,"constant_response_size_bytes","","A fixed size for responses returned by the trusted runtime.",4,null],[12,"constant_processing_time","","A fixed response time.",4,null],[3,"ValidatedPolicy","","Similar to [`Policy`], but it is guaranteed to be valid.…",null,null],[3,"WasmHandler","","",null,null],[5,"apply_policy","","Runs the given function and applies the given security…",null,[[["validatedpolicy",3]]]],[11,"validate","","",4,[[],["result",6]]],[11,"create","","",5,[[["lookupdata",3],["logger",3],["arc",3]],["result",6]]],[11,"handle_invoke","","",5,[[["vec",3]]]],[11,"from","oak_functions_loader::proto::grpc_handler_server","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"into_any_arc","","",1,[[["arc",3]],[["arc",3],["any",8]]]],[11,"into_any","","",1,[[["box",3]],[["any",8],["box",3]]]],[11,"into_any_rc","","",1,[[["rc",3]],[["rc",3],["any",8]]]],[11,"as_any","","",1,[[],["any",8]]],[11,"as_any_mut","","",1,[[],["any",8]]],[11,"poll_ready","","",1,[[["context",3]],[["poll",4],["result",4]]]],[11,"call","","",1,[[["request",3]]]],[11,"into_request","","",1,[[],["request",3]]],[11,"vzip","","",1,[[]]],[11,"from","oak_functions_loader::grpc","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"into_any_arc","","",6,[[["arc",3]],[["arc",3],["any",8]]]],[11,"into_any","","",6,[[["box",3]],[["any",8],["box",3]]]],[11,"into_any_rc","","",6,[[["rc",3]],[["rc",3],["any",8]]]],[11,"as_any","","",6,[[],["any",8]]],[11,"as_any_mut","","",6,[[],["any",8]]],[11,"into_request","","",6,[[],["request",3]]],[11,"vzip","","",6,[[]]],[11,"from","oak_functions_loader::logger","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"into_any_arc","","",2,[[["arc",3]],[["arc",3],["any",8]]]],[11,"into_any","","",2,[[["box",3]],[["any",8],["box",3]]]],[11,"into_any_rc","","",2,[[["rc",3]],[["rc",3],["any",8]]]],[11,"as_any","","",2,[[],["any",8]]],[11,"as_any_mut","","",2,[[],["any",8]]],[11,"into_request","","",2,[[],["request",3]]],[11,"vzip","","",2,[[]]],[11,"from","oak_functions_loader::lookup","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"into_any_arc","","",3,[[["arc",3]],[["arc",3],["any",8]]]],[11,"into_any","","",3,[[["box",3]],[["any",8],["box",3]]]],[11,"into_any_rc","","",3,[[["rc",3]],[["rc",3],["any",8]]]],[11,"as_any","","",3,[[],["any",8]]],[11,"as_any_mut","","",3,[[],["any",8]]],[11,"into_request","","",3,[[],["request",3]]],[11,"vzip","","",3,[[]]],[11,"from","oak_functions_loader::server","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"into_any_arc","","",4,[[["arc",3]],[["arc",3],["any",8]]]],[11,"into_any","","",4,[[["box",3]],[["any",8],["box",3]]]],[11,"into_any_rc","","",4,[[["rc",3]],[["rc",3],["any",8]]]],[11,"as_any","","",4,[[],["any",8]]],[11,"as_any_mut","","",4,[[],["any",8]]],[11,"into_request","","",4,[[],["request",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"into_any_arc","","",7,[[["arc",3]],[["arc",3],["any",8]]]],[11,"into_any","","",7,[[["box",3]],[["any",8],["box",3]]]],[11,"into_any_rc","","",7,[[["rc",3]],[["rc",3],["any",8]]]],[11,"as_any","","",7,[[],["any",8]]],[11,"as_any_mut","","",7,[[],["any",8]]],[11,"into_request","","",7,[[],["request",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"into_any_arc","","",5,[[["arc",3]],[["arc",3],["any",8]]]],[11,"into_any","","",5,[[["box",3]],[["any",8],["box",3]]]],[11,"into_any_rc","","",5,[[["rc",3]],[["rc",3],["any",8]]]],[11,"as_any","","",5,[[],["any",8]]],[11,"as_any_mut","","",5,[[],["any",8]]],[11,"into_request","","",5,[[],["request",3]]],[11,"vzip","","",5,[[]]],[11,"invoke","oak_functions_loader::grpc","",6,[[["request",3],["request",3]],[["box",3],["pin",3]]]],[11,"clone","oak_functions_loader::proto::grpc_handler_server","",1,[[]]],[11,"clone","oak_functions_loader::logger","",2,[[],["logger",3]]],[11,"clone","oak_functions_loader::server","",4,[[],["policy",3]]],[11,"clone","","",5,[[],["wasmhandler",3]]],[11,"default","oak_functions_loader::logger","",2,[[]]],[11,"fmt","oak_functions_loader::proto::grpc_handler_server","",1,[[["formatter",3]],["result",6]]],[11,"fmt","oak_functions_loader::server","",4,[[["formatter",3]],["result",6]]],[11,"try_from","","",7,[[["policy",3]],["result",6]]],[11,"poll_ready","oak_functions_loader::proto::grpc_handler_server","",1,[[["context",3]],[["poll",4],["result",4]]]],[11,"call","","",1,[[["request",3]]]],[11,"deserialize","oak_functions_loader::server","",4,[[],["result",4]]]],"p":[[8,"GrpcHandler"],[3,"GrpcHandlerServer"],[3,"Logger"],[3,"LookupData"],[3,"Policy"],[3,"WasmHandler"],[3,"FunctionsServer"],[3,"ValidatedPolicy"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);