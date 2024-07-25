#[tauri::command]
pub fn home() -> String {
    String::from("hello world")
}
