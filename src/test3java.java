

import java.util.*;

public class UserService {
    private List<String> users = new ArrayList<>();

    public void addUser(String name) {
        if (name == null || name.isEmpty()) return;
        users.add(name);
    }

    public boolean removeUser(String name) {
        return users.remove(name);
    }

    public Optional<String> findUser(String prefix) {
        for (String u : users) {
            if (u.startsWith(prefix)) return Optional.of(u);
        }
        return Optional.empty();
    }

    public int count() { return users.size(); }
}
