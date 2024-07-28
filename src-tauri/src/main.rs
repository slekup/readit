// NOTE: Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use readit::{app::App, home};

fn main() {
    let app = App::init();

    tauri::Builder::default()
        .manage(app)
        .invoke_handler(tauri::generate_handler![home::home])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
