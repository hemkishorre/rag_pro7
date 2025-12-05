// example.go
package main

import "fmt"

type User struct {
    Name string
    Age  int
}

func (u User) Greet() string {
    return "Hello " + u.Name
}

func Add(a int, b int) int {
    return a + b
}

func main() {
    user := User{Name: "Dev", Age: 25}
    fmt.Println(user.Greet())
    fmt.Println(Add(10, 20))
}
