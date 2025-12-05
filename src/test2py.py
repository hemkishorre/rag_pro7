# utils.py - small helper functions

def add(a, b):
    return a + b

def mul(a, b):
    result = 0
    for _ in range(b):
        result += a
    return result

def greet(name):
    if not name:
        return "Anonymous"
    return f"Hello, {name}"
