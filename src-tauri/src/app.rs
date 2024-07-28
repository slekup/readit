pub struct App {
    pub client: reqwest::Client,
}

impl App {
    pub fn init() -> Self {
        Self {
            client: reqwest::Client::new(),
        }
    }
}
