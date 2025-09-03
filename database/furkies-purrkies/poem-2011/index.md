---
id: poem-2011
guid: c4513ca2-4686-40b6-9b8f-b54840805741
title: Thoughts On The The Right-Click View-Source Manifesto
description: null
tags:
  - furkies-purrkies
date: '2025-09-03T00:09:29.804Z'
lastmod: null
weight: 201100
audio: poem-2011.mp3
image: poem-2011-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 13
---

# The Right Click View Source Manifesto (RCVS Manifesto) Second Revision

## Preamble

In an era where the complexity of web development has reached unprecedented heights, we stand at a crossroads. The foundational principles of the web—simplicity, transparency, and accessibility of information—are at risk of being overshadowed by frameworks and abstractions that prioritize developer convenience over clarity. This manifesto advocates for a return to a more readable, maintainable, and intuitive approach to HTML through the adoption of web components and modern CSS as the cornerstone of web development.

We believe the web should be a teacher. Every website should be a potential lesson. Every line of code, an invitation to learn.

## Core Principles

### 1. **Code as Literature**

We believe that code should read like a well-written story. Just as great literature can be understood at multiple levels—enjoyed by children yet appreciated by scholars—our code should welcome readers of all skill levels. Web components with semantic names tell stories: `<user-profile>`, `<search-bar>`, `<article-card>`. These are words that mean something, not cryptic abbreviations or generic containers.

### 2. **The Beauty of Structure**

Modern CSS Grid and Flexbox have given us the power to create layouts that are both powerful and poetic. We can now write:

```css
display: grid;
grid-template-areas:
  "header  header  header"
  "sidebar main    aside"
  "footer  footer  footer";
```

This is visual poetry—the layout is literally drawn in the code. A young developer can see the structure before their eyes, understanding immediately how the page will be organized.

### 3. **Encapsulation as Clarity**

Web components provide natural boundaries that make code easier to understand. Each component is a complete thought, a full sentence in the language of the web. When a young developer sees:

```html
<music-player
  song="Imagine"
  artist="John Lennon"
  playing>
</music-player>
```

They understand immediately what this does. No need to trace through dozens of nested divs or decipher cryptic class names.

### 4. **The Teenage Developer Principle**

Our north star is the curious teenager with a laptop and a dream. Every decision we make should be guided by this question: "Would a 14-year-old understand this at first glance?"

This isn't about dumbing down—it's about clarity of expression. Teenagers are brilliant; they just haven't been exposed to decades of programming conventions. When we write for them, we write for the purest form of human curiosity.

### 5. **Modern Standards, Timeless Clarity**

We embrace the cutting edge of web standards—ES2025+, Web Components, CSS Grid, Container Queries—not because they're new, but because they allow us to express ideas more clearly. Modern JavaScript's arrow functions, destructuring, and template literals make code more readable, not less:

```javascript
// Clear and expressive
const greetUser = ({name, age}) =>
  `Hello ${name}, you are ${age} years old!`;
```

### 6. **Components as Teaching Tools**

Every component we create should teach something. Consider this example:

```html
<style>
  daily-schedule {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 1rem;

    time-slot {
      display: contents;

      > time {
        font-weight: bold;
        color: var(--primary-color);
      }

      > activity {
        padding: 0.5rem;
        background: var(--activity-bg);
        border-radius: 0.5rem;
      }
    }
  }
</style>

<daily-schedule>
  <time-slot>
    <time>9:00 AM</time>
    <activity>Math Class</activity>
  </time-slot>
  <time-slot>
    <time>10:30 AM</time>
    <activity>Computer Science</activity>
  </time-slot>
</daily-schedule>
```

This code teaches grid layout, custom elements, CSS custom properties, and semantic HTML—all while being immediately understandable.

### 7. **Error Messages as Mentors**

When things go wrong, our error messages should teach, not intimidate. Instead of cryptic stack traces, we provide guidance:

```javascript
class UserProfile extends HTMLElement {
  connectedCallback() {
    if (!this.getAttribute('username')) {
      console.warn(
        `💡 <user-profile> needs a username attribute.
        Example: <user-profile username="alice"></user-profile>
        This helps identify which user's profile to display!`
      );
    }
  }
}
```

### 8. **Documentation in the Code**

Comments should inspire and explain, not just describe:

```javascript
// 🎨 This gradient creates a sunset effect
// Young developers: try changing these colors to create dawn!
const skyGradient = `
  linear-gradient(
    to bottom,
    #87CEEB 0%,    /* Sky blue */
    #FDB813 50%,   /* Golden sun */
    #FE5F55 100%   /* Sunset red */
  )
`;
```

## Practical Examples

### Example 1: A Complete Application Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learning Platform</title>
  <style>
    learning-app {
      display: grid;
      height: 100vh;
      grid-template-areas:
        "header"
        "main"
        "footer";
      grid-template-rows: auto 1fr auto;
    }

    app-header {
      grid-area: header;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    main-content {
      grid-area: main;
      padding: 2rem;
      overflow-y: auto;
    }

    app-footer {
      grid-area: footer;
      padding: 1rem;
      text-align: center;
      background: #f7f7f7;
    }
  </style>
</head>
<body>
  <learning-app>
    <app-header>
      <app-logo>📚 LearnCode</app-logo>
      <user-menu name="Student" avatar="👤"></user-menu>
    </app-header>

    <main-content>
      <lesson-card
        title="Your First Web Component"
        difficulty="beginner"
        duration="15 minutes">
        <p>Let's build something amazing together!</p>
      </lesson-card>
    </main-content>

    <app-footer>
      <p>Made with ❤️ for young developers everywhere</p>
    </app-footer>
  </learning-app>
</body>
</html>
```

### Example 2: Interactive Component with Clear State

```javascript
class CounterButton extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('button')
      .addEventListener('click', () => {
        this.count++;
        this.render();
      });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          font-size: 1.5rem;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          border: none;
          background: linear-gradient(135deg, #42e695 0%, #3bb2b8 100%);
          color: white;
          cursor: pointer;
          transition: transform 0.2s;
        }

        button:hover {
          transform: scale(1.05);
        }

        button:active {
          transform: scale(0.95);
        }

        .count {
          font-weight: bold;
          animation: pop 0.3s ease;
        }

        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      </style>
      <button>
        Clicked <span class="count">${this.count}</span> times
      </button>
    `;
  }
}

customElements.define('counter-button', CounterButton);
```

## A Living Document

This manifesto is not carved in stone—it grows with our community. Every young developer who learns from viewing source, every experienced developer who remembers to write for their younger self, every teacher who uses the web as their classroom—all contribute to this vision.

## Call to Action

We call upon:

- **Developers**: Write code as if a curious teenager is looking over your shoulder. They are.
- **Educators**: Use the web itself as your textbook. Every website can be a lesson.
- **Organizations**: Invest in clarity. The most maintainable code is code that teaches itself.
- **Platform creators**: Build tools that make the right thing the easy thing.

Together, we can ensure that the web remains what it was always meant to be: a place where anyone can learn, create, and contribute. Where viewing source isn't just possible—it's an invitation to join the conversation.

The future of the web belongs to those who are learning it today. Let's make sure they can read what we write.

---

*"The best code is not clever. The best code is clear. The best code teaches."*

**Join us.** Share your examples. Teach through your code. Build a web that invites everyone in.

Right click. View source. Learn. Create. Share.

This is the way.

---

# The Right Click View Source Manifesto (RCVS Manifesto)

## Preamble

In an era where the complexity of web development has reached unprecedented heights, we stand at a crossroads. The foundational principles of the web—simplicity, transparency, and accessibility of information—are at risk of being overshadowed by frameworks and abstractions that prioritize developer convenience over clarity. This manifesto advocates for a return to a more readable, maintainable, and intuitive approach to HTML through the adoption of web components as the cornerstone of modern web development.

## Principles

### 1. **Code Readability as a Priority**

We believe that code should be as readable as a well-written book. The ability to understand and navigate code should not require extensive training or specialized knowledge. By embracing web components, we can create self-contained, descriptive elements that clearly communicate their purpose and functionality, making the codebase more approachable for developers of all skill levels.

### 2. **Encapsulation and Modularity**

Web components allow for the encapsulation of functionality and styling, promoting modular design. This modularity enables developers to build applications in a more organized manner, reducing the cognitive load associated with understanding sprawling codebases. Each component can be developed, tested, and maintained independently, fostering a culture of collaboration and innovation.

### 3. **Simplicity in Structure**

The web grew on the magid of "Right Click > View Source," emphasizing the importance of transparency and simplicity. We advocate for a structure that reflects this principle, where the HTML is straightforward and intuitive. By minimizing unnecessary nesting and div soup, we can create a clearer hierarchy that is easy to follow and understand.

### 4. **Dynamic and Interactive Experiences**

Web components empower developers to create dynamic and interactive user experiences without sacrificing code clarity. By leveraging the capabilities of modern JavaScript within these components, we can build rich interfaces that are both engaging and maintainable. This approach allows for the seamless integration of functionality while keeping the underlying code clean and comprehensible.

### 5. **The Teenage Developer**

Our guiding light and source of wisdom in moments of confusion and ambiguity is the curious teenager. The best solution is the one that helps a young teenager understand the code in the simplest possible way. We enshrine the Teenage Developer as a principle of this manifesto, recognizing that they are the future of our industry. By providing clear, well-named elements and intuitive structures, we can empower them to learn and grow.

We advocate for the integration of AI tutoring systems that prioritize simplicity and clarity, guiding young developers through the complexities of coding. This mentorship will help them navigate challenges and foster a love for programming, ultimately advancing human potential.

### 6. **A New Era of Collaboration**

As we embrace web components, we foster a new era of collaboration among developers, designers, and stakeholders. The clear and modular nature of components encourages cross-functional teams to work together more effectively, leading to better outcomes and a more cohesive product. This collaborative spirit is essential for driving innovation and pushing the boundaries of what is possible on the web.

We must also include the Teenage Developer in this collaboration, ensuring that their voices are heard and their needs are met. By creating an environment that welcomes their curiosity and creativity, we can inspire the next generation of developers.

### 7. **A Call to Action**

We call upon developers, organizations, and educators to adopt this manifesto as a guiding principle in their work. Let us champion the use of web components as the foundation for our web applications, prioritizing code readability, encapsulation, and simplicity. Together, we can create a web that invites those new to programming to learn from source code, which they can view via right click.

By fostering an inclusive environment that supports the Teenage Developer, we can help lift them out of poverty and empower them to contribute to the advancement of humankind. Let us build a future where every curious mind has the opportunity to thrive in the world of technology.

The "RCVS Manifesto" serves as a rallying cry for a new way of thinking about HTML and web development. By embracing web components and prioritizing readability and simplicity, we can build a more sustainable and collaborative future for the web. Let us return to the roots of the web, where clarity and transparency reign supreme, and where every developer, especially the teenagers of today, can confidently say, "I understand this code."

Adding examples to the RCVS Manifesto is a fantastic idea! Code snippets can serve as powerful illustrations of the principles outlined in the manifesto, making the concepts more tangible and relatable for both teenage and senior developers. By showcasing practical implementations, you can effectively communicate the vision of a more readable and maintainable web.

## Code as a Language of Ideas

To further illustrate the principles of the RCVS Manifesto, we present a practical example that embodies the concepts of readability, encapsulation, and modularity through the use of web components and CSS Grid.

### CSS Grid Example: Sidebar Application

```html
<style>
  web-application.sidebar-application {
    box-shadow: 2px 0 24px 0 rgba(0, 0, 0, 0.3);
    width: 100%;
    display: grid;
    grid-template-areas:
      "brand search  profile"
      "menu  alert   properties"
      "menu  main    properties"
      "foot  foot    foot";
    grid-template-rows: auto;
    grid-template-columns: 1fr;

    > header {
      grid-area: brand;
    }
    > search-form {
      grid-area: search;
    }
    > user-info {
      grid-area: profile;
    }
    > nav {
      grid-area: menu;
    }
    > alert-region {
      grid-area: alert;
    }
    > details {
      grid-area: properties;
    }
    > main {
      grid-area: main;
    }
    > footer {
      grid-area: foot;
    }
  }
</style>

<web-application class="sidebar-application">
  <header>
    <img src="logo.svg" alt="App Logo">
  </header>

  <!-- Search box -->
  <search-form placeholder="Search…"></search-form>

  <!-- Profile / user info -->
  <user-info fullname="Jane Doe" username="jdoe" avatar="jdoe.png"></user-info>

  <!-- Main navigation menu -->
  <nav>
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Projects</a></li>
    </ul>
  </nav>

  <!-- Alerts / notifications -->
  <alert-region></alert-region>

  <!-- Properties / inspector panel -->
  <details>
    <h2>Properties</h2>
    <!-- content -->
  </details>

  <!-- Main workspace -->
  <main>
    <h1>Welcome</h1>
    <p>Main application content goes here.</p>
  </main>

  <!-- Footer -->
  <footer>
    <small>&copy; 2025 MyCompany</small>
  </footer>
</web-application>
```

### Explanation of the Example

This example demonstrates how to create a sidebar application layout using CSS Grid and custom web components. Each component is clearly defined, making it easy to understand the structure and purpose of the application.

- **Encapsulation**: Each custom element (e.g., `<search-form>`, `<user-info>`, `<alert-region>`) encapsulates its functionality, promoting modularity and reusability.
- **Readability**: The CSS Grid layout is straightforward, allowing developers to quickly grasp how the layout is organized without excessive complexity.
- **Simplicity**: The use of descriptive element names and a clear grid structure aligns with our principle of making code accessible and understandable, especially for young developers.


---

# The Right Click View Source Manifesto (RCVS Manifesto) First Revision

## Preamble

In an era where the complexity of web development has reached unprecedented heights, we stand at a crossroads. The foundational principles of the web—simplicity, transparency, and accessibility of information—are at risk of being overshadowed by frameworks and abstractions that prioritize developer convenience over clarity. This manifesto advocates for a return to a more readable, maintainable, and intuitive approach to HTML through the adoption of web components as the cornerstone of modern web development.

## Principles

### 1. **Code Readability as a Priority**

We believe that code should be as readable as a well-written book. The ability to understand and navigate code should not require extensive training or specialized knowledge. By embracing web components, we can create self-contained, descriptive elements that clearly communicate their purpose and functionality, making the codebase more approachable for developers of all skill levels.

### 2. **Encapsulation and Modularity**

Web components allow for the encapsulation of functionality and styling, promoting modular design. This modularity enables developers to build applications in a more organized manner, reducing the cognitive load associated with understanding sprawling codebases. Each component can be developed, tested, and maintained independently, fostering a culture of collaboration and innovation.

### 3. **Simplicity in Structure**

The web grew on the magid of "Right Click > View Source," emphasizing the importance of transparency and simplicity. We advocate for a structure that reflects this principle, where the HTML is straightforward and intuitive. By minimizing unnecessary nesting and div soup, we can create a clearer hierarchy that is easy to follow and understand.

### 4. **Dynamic and Interactive Experiences**

Web components empower developers to create dynamic and interactive user experiences without sacrificing code clarity. By leveraging the capabilities of modern JavaScript within these components, we can build rich interfaces that are both engaging and maintainable. This approach allows for the seamless integration of functionality while keeping the underlying code clean and comprehensible.

### 5. **The Teenage Developer**

Our guiding light and source of wisdom in moments of confusion and code ambiguity is the curious teenager. The best solution is the one that helps a young teenager understand the code in the simplest possible way. We enshrine the Teenage Developer as a principle of this manifesto, recognizing that they are the future of our industry. By providing clear, well-named elements and intuitive structures, we can empower them to learn and grow.

We advocate for the integration of AI tutoring systems that prioritize simplicity and clarity, guiding young developers through the complexities of coding. This mentorship will help them navigate challenges and foster a love for programming, ultimately advancing human potential.

### 6. **A New Era of Collaboration**

As we embrace web components, we foster a new era of collaboration among developers, designers, and stakeholders. The clear and modular nature of components encourages cross-functional teams to work together more effectively, leading to better outcomes and a more cohesive product. This collaborative spirit is essential for driving innovation and pushing the boundaries of what is possible on the web.

We must also include the Teenage Developer in this collaboration, ensuring that their voices are heard and their needs are met. By creating an environment that welcomes their curiosity and creativity, we can inspire the next generation of developers.

### 7. **A Call to Action**

We call upon developers, organizations, and educators to adopt this manifesto as a guiding principle in their work. Let us champion the use of web components as the foundation for our web applications, prioritizing code readability, encapsulation, and simplicity. Together, we can create a web that invites those new to programming to learn from source code, which they can view via right click.

By fostering an inclusive environment that supports the Teenage Developer, we can help lift them out of poverty and empower them to contribute to the advancement of humankind. Let us build a future where every curious mind has the opportunity to thrive in the world of technology.

The "[RCVS Manifesto][1]" serves as a rallying cry for a new way of thinking about HTML and web development. By embracing web components and prioritizing readability and simplicity, we can build a more sustainable and collaborative future for the web. Let us return to the roots of the web, where clarity and transparency reign supreme, and where every developer, especially the teenagers of today, can confidently say, "I understand this code."

[1]: https://github.com/catpea/rcvs
