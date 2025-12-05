# user_service.py
from typing import List, Optional

class UserService:
    def __init__(self):
        self.users: List[str] = []

    def add_user(self, name: str) -> None:
        if not name:
            return
        self.users.append(name)

    def remove_user(self, name: str) -> bool:
        try:
            self.users.remove(name)
            return True
        except ValueError:
            return False

    def find_user(self, prefix: str) -> Optional[str]:
        for u in self.users:
            if u.startswith(prefix):
                return u
        return None
