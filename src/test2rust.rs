// utils.rs
pub fn mul(a: i32, b: i32) -> i32 {
    let mut result = 0;
    for _ in 0..b {
        result += a;
    }
    result
}

pub fn greet(name: &str) -> String {
    if name.is_empty() { "Anonymous".into() } else { format!("Hello, {}", name) }
}
