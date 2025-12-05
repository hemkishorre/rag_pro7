// example.rs

struct User {
    name: String,
}

impl User {
    fn greet(&self) -> String {
        format!("Hello {}", self.name)
    }
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let user = User { name: String::from("RustDev") };
    println!("{}", user.greet());
    println!("{}", add(10, 20));
}
