# example.py

class Calculator:
    def add(self, a, b):
        return a + b

def greet(name: str) -> str:
    return f"Hello, {name}!"

if __name__ == "__main__":
    calc = Calculator()
    print(calc.add(5, 10))
    print(greet("Developer"))
