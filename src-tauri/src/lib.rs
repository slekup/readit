use std::error::Error;

pub mod app;
pub mod home;

// Represents all errors possible.
#[derive(Debug, thiserror::Error)]
pub enum AppError {
    #[error(transparent)]
    Io(#[from] std::io::Error),
}

impl serde::Serialize for AppError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

impl From<reqwest::Error> for AppError {
    fn from(value: reqwest::Error) -> Self {
        AppError::Io(std::io::Error::new(
            std::io::ErrorKind::Other,
            // format!("{:?}: {} {:?}", value.url(), value, value.status()),
            format!("{:?}", value.source()),
        ))
    }
}
