initSidebarItems({"fn":[["background","Executes the provided closure passing to it a [`Term`] instance signalling when to terminate, and spawns the resulting [`Future`] in the background, returning a [`Background`] instance."],["compile_rust_wasm","Uses cargo to compile a Rust manifest to Wasm bytes."],["free_port",""],["get_config_info",""],["make_request",""],["serialize_entries","Serializes the provided map as a contiguous buffer of length-delimited protobuf messages of type `Entry`."]],"struct":[["Background","Wrapper around a termination signal [`oneshot::Sender`] and the [`JoinHandle`] of the associated background task, created by [`background`]."],["MockStaticServer","A mock implementation of a static server that always returns the same configurable response for any incoming HTTP request."],["Term","A wrapper around a termination signal [`oneshot::Receiver`]."],["TestResult",""]]});