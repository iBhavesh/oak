initSidebarItems({"fn":[["channel_read","Allocates a buffer on the callers memory to write a message from the channel with `channel_handle`. After a successful call `dest_buf_ptr_ptr` holds the address of the buffer and `dest_buf_len_ptr` holds its length. The caller can then read the message from `dest_buf_ptr_ptr`."],["channel_wait","Waits until at least one of the channels from the channel handles in the buffer at `channel_handle_buf_ptr` has a message to read, or until the `deadline_ms` expires. After a successful call to `channel_wait`, the buffer at `ready_channel_handle_buf_ptr` holds the channel handles with at least one message to read. Both, `channel_handle_buf_len` and `ready_channel_handle_buf_len` hold the length of the respective buffers in bytes."],["channel_write","Writes a message, i.e., `src_buf_len` bytes, from `scr_buf_ptr` into the channel with `channel_handle`."],["read_request","See `read_request`."],["report_metric","See `report_metric`."],["storage_get_item","See `storage_get_item`."],["tf_model_infer","See `tf_model_infer`."],["write_log_message","See `write_log_message`."],["write_response","See `write_response`."]],"mod":[["proto",""]]});