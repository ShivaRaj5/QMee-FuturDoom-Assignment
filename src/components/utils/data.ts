export const dummyResponse = `
This is my response -->

\`\`\`java
public class AddNumbers {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int sum = a + b;
        System.out.println("Sum: " + sum);
    }
}
\`\`\`

You can also write the same logic in JavaScript:

\`\`\`javascript
function addNumbers(a, b) {
    const sum = a + b;
    console.log(\`Sum: \${sum}\`);
    return sum;
}

// Usage
addNumbers(10, 20);
\`\`\`

And here's a Python version:

\`\`\`python
def add_numbers(a, b):
    sum_result = a + b
    print(f"Sum: {sum_result}")
    return sum_result

# Usage
add_numbers(10, 20)
\`\`\`
`;