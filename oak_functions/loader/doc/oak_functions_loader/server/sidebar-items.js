initSidebarItems({"constant":[["ABI_USIZE","Wasm type identifier for position/offset values in linear memory. Any future 64-bit version of Wasm would use a different value."]],"fn":[["apply_policy","Runs the given function and applies the given security policy to the execution of the function and the response returned from it. Serializes and returns the response as a binary protobuf-encoded byte array of a constant size."],["format_bytes","Converts a binary sequence to a string if it is a valid UTF-8 string, or formats it as a numeric vector of bytes otherwise."]],"struct":[["Policy","Similar to [`ServerPolicy`], but it is used for reading the policy provided in the config, and is therefore not guaranteed to be valid."],["WasmHandler",""],["WasmState","`WasmState` holds runtime values for a particular execution instance of Wasm, handling a single user request. The methods here correspond to the ABI host functions that allow the Wasm module to exchange the request and the response with the Oak functions server. These functions translate values between Wasm linear memory and Rust types."]],"trait":[["ExtensionFactory",""],["OakApiNativeExtension","Trait for implementing extensions, to implement new native functionality."]],"type":[["AbiPointer",""],["AbiPointerOffset",""],["BoxedExtension",""],["BoxedExtensionFactory",""]]});