use std::collections::VecDeque;

pub struct UserService {
    users: VecDeque<String>,
}

impl UserService {
    pub fn new() -> Self {
        UserService { users: VecDeque::new() }
    }

    pub fn add_user(&mut self, name: String) {
        if name.is_empty() { return; }
        self.users.push_back(name);
    }

    pub fn count(&self) -> usize {
        self.users.len()
    }

    pub fn find_user(&self, prefix: &str) -> Option<&String> {
        for u in &self.users {
            if u.starts_with(prefix) { return Some(u); }
        }
        None
    }
}
