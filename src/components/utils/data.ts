export const dummyResponses = [
  // Code-related responses
  `
Here's how you can implement a sorting algorithm in different languages:

\`\`\`javascript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
\`\`\`

In Python, the same logic would be:

\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
\`\`\`

Both implementations have O(n²) time complexity and are great for educational purposes!
`,

  `
Let me show you how to create a REST API with Express.js:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };
    users.push(user);
    res.status(201).json(user);
});

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});
\`\`\`

This creates a simple CRUD API for managing users with GET and POST endpoints.
`,

  `
Here's a React component with hooks for managing state:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        document.title = \`Count: \${count}\`;
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            {isMounted && <p>Component is mounted!</p>}
        </div>
    );
}
\`\`\`

This demonstrates useState and useEffect hooks for state management and lifecycle events.
`,

  // General project responses (~200 words)
  `
Welcome to FuturDoom, an innovative chat application built with modern web technologies! This project represents the cutting edge of conversational interfaces, combining React's powerful component architecture with TypeScript's type safety for a robust development experience. The application features a sleek, responsive design using Tailwind CSS, with smooth animations powered by Framer Motion that create an engaging user experience. Our chat interface supports real-time messaging with typewriter effects, code syntax highlighting, and markdown rendering for rich content display. The project leverages Vite for lightning-fast development and build processes, ensuring optimal performance across all devices. With careful attention to user experience, we've implemented features like message deletion, auto-scrolling, and intuitive navigation patterns. The codebase follows modern React patterns including hooks, functional components, and proper state management. Whether you're building a customer support system, a collaborative workspace, or just exploring modern web development, FuturDoom serves as an excellent foundation for creating sophisticated chat applications that scale beautifully.
`,

  `
FuturDoom represents our vision for the future of digital communication, where artificial intelligence and human interaction seamlessly blend to create meaningful conversations. This chat application showcases advanced frontend development techniques, including component-based architecture, responsive design principles, and modern state management patterns. Built with React 19 and TypeScript, it demonstrates best practices in type-safe development while maintaining excellent performance through optimized rendering and efficient DOM updates. The interface features a dual-avatar system distinguishing between user and AI messages, with carefully crafted visual hierarchy and accessibility considerations. Our implementation includes sophisticated features like message persistence, real-time typing indicators, and intelligent scroll management that enhance the overall user experience. The project's modular structure allows for easy extension and customization, making it suitable for various use cases from customer service to educational platforms. By leveraging modern build tools and development workflows, we've created a maintainable codebase that serves as both a functional application and a learning resource for developers interested in building next-generation chat interfaces.
`,

  `
The FuturDoom chat application exemplifies modern web development excellence through its thoughtful architecture and user-centric design. This project demonstrates how contemporary frontend technologies can be combined to create an intuitive and visually appealing communication platform. The application's foundation rests on React's component-based paradigm, enhanced by TypeScript's static typing for improved code quality and developer experience. We've implemented sophisticated UI patterns including animated message transitions, typewriter text effects, and responsive layouts that adapt seamlessly across different screen sizes. The chat interface supports rich content rendering with markdown support and syntax-highlighted code blocks, making it ideal for technical discussions and collaborative coding sessions. Performance optimization is achieved through efficient state management, lazy loading of assets, and optimized bundle sizes. The project's modular architecture allows for easy integration of additional features like file sharing, voice messaging, or video calling. Security considerations include proper input sanitization and XSS prevention, ensuring safe user interactions. With comprehensive error handling and graceful degradation, FuturDoom provides a reliable foundation for building scalable chat applications that meet the demands of modern digital communication.
`,

  `
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
`,

];

// Helper function to detect if user message contains code
export function containsCode(message: string): boolean {
  const codePatterns = [
    /```[\s\S]*```/g,        // Code blocks
    /`[^`]+`/g,              // Inline code
    /\b(function|class|const|let|var|import|export|def|if|else|for|while|return)\b/gi,
    /\b(java|javascript|python|react|node|express|api|css|html)\b/gi,
    /[{}();[\]]/g,           // Common code symbols
  ];
  
  return codePatterns.some(pattern => pattern.test(message));
}

// Function to get appropriate response based on user input
export function getDummyResponse(userMessage: string): string {
  const hasCode = containsCode(userMessage);
  
  if (hasCode) {
    // Return a code-related response
    const codeResponses = dummyResponses.filter((_, index) => index < 4);
    return codeResponses[Math.floor(Math.random() * codeResponses.length)];
  } else {
    // Return a general project response
    const generalResponses = dummyResponses.filter((_, index) => index >= 4 && index < 7);
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  }
}

export const dummyResponse = getDummyResponse("Hello, how are you?");