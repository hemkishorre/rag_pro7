package service

type UserService struct {
    users []string
}

func (s *UserService) AddUser(name string) {
    if name == "" { return }
    s.users = append(s.users, name)
}

func (s *UserService) RemoveUser(name string) bool {
    for i, u := range s.users {
        if u == name {
            s.users = append(s.users[:i], s.users[i+1:]...)
            return true
        }
    }
    return false
}

func (s *UserService) Count() int { return len(s.users) }
