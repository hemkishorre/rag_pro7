package utils

func Add(a, b int) int {
    return a + b
}

func Mul(a, b int) int {
    result := 0
    for i := 0; i < b; i++ {
        result += a
    }
    return result
}

func Greet(name string) string {
    if name == "" {
        return "Anonymous"
    }
    return "Hello, " + name
}
