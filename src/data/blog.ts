export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  author: {
    name: string
    avatar: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-react-applications',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for structuring and scaling React applications for production environments.',
    content: `
# Building Scalable React Applications

When building React applications that need to scale, there are several key principles and patterns that can help ensure your codebase remains maintainable and performant as it grows.

## Component Architecture

The foundation of a scalable React application lies in its component architecture. Here are some key principles:

### 1. Single Responsibility Principle
Each component should have a single, well-defined responsibility. This makes components easier to test, debug, and reuse.

### 2. Composition over Inheritance
React favors composition over inheritance. Build complex UIs by composing smaller, focused components.

### 3. Container and Presentational Components
Separate your components into two categories:
- **Container Components**: Handle logic and state management
- **Presentational Components**: Focus purely on rendering UI

## State Management

As your application grows, managing state becomes increasingly important:

### Local State vs Global State
- Use local state for component-specific data
- Use global state (Context API, Redux, Zustand) for shared application state

### State Normalization
Normalize your state structure to avoid deeply nested objects and make updates more efficient.

## Performance Optimization

### Code Splitting
Use React.lazy() and Suspense to split your code and load components on demand.

### Memoization
Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.

## Testing Strategy

A scalable application needs a comprehensive testing strategy:

### Unit Tests
Test individual components and functions in isolation.

### Integration Tests
Test how different parts of your application work together.

### End-to-End Tests
Test complete user workflows to ensure everything works as expected.

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. By following these principles, you can create applications that are maintainable, performant, and ready to grow with your needs.
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['React', 'JavaScript', 'Architecture', 'Best Practices'],
    author: {
      name: 'Deep Patel',
      avatar: '/api/placeholder/40/40',
    },
  },
  {
    slug: 'modern-css-techniques-tailwind',
    title: 'Modern CSS Techniques with Tailwind',
    excerpt: 'Explore advanced CSS techniques and how Tailwind CSS can streamline your development workflow.',
    content: `
# Modern CSS Techniques with Tailwind

Tailwind CSS has revolutionized how we approach styling in modern web development. Let's explore some advanced techniques and best practices.

## Utility-First Approach

Tailwind's utility-first approach offers several advantages:

### Rapid Development
Build interfaces quickly by composing utilities directly in your markup.

### Consistent Design System
Tailwind provides a consistent set of design tokens out of the box.

### Responsive Design
Built-in responsive utilities make it easy to create adaptive layouts.

## Advanced Techniques

### Custom Properties with Tailwind
Combine CSS custom properties with Tailwind for dynamic theming.

### Component Extraction
When you find yourself repeating utility combinations, extract them into components.

### Animation and Transitions
Create smooth animations with Tailwind's transition utilities.

## Performance Considerations

### Purging Unused CSS
Tailwind automatically removes unused styles in production, keeping your CSS bundle small.

### JIT Mode
Just-In-Time mode generates styles on-demand, providing better performance and unlimited customization.

## Conclusion

Tailwind CSS provides a powerful foundation for modern web styling. By mastering these techniques, you can build beautiful, maintainable interfaces efficiently.
    `,
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['CSS', 'Tailwind', 'Design', 'Frontend'],
    author: {
      name: 'Deep Patel',
      avatar: '/api/placeholder/40/40',
    },
  },
  {
    slug: 'nextjs-14-whats-new',
    title: 'Next.js 14: What\'s New and Exciting',
    excerpt: 'A comprehensive overview of the latest features and improvements in Next.js 14.',
    content: `
# Next.js 14: What's New and Exciting

Next.js 14 brings significant improvements to performance, developer experience, and new features that make building React applications even better.

## Key Features

### Turbopack (Beta)
Next.js 14 includes Turbopack in beta, offering:
- 53% faster local server startup
- 94% faster code updates with Fast Refresh

### Server Actions (Stable)
Server Actions are now stable, providing a seamless way to handle server-side logic.

### Partial Prerendering (Preview)
A new rendering model that combines static and dynamic rendering.

## Performance Improvements

### Metadata API Enhancements
Improved metadata handling for better SEO.

### Image Optimization
Enhanced image optimization with better performance and smaller bundle sizes.

## Developer Experience

### Improved Error Messages
More helpful error messages and better debugging experience.

### Enhanced TypeScript Support
Better type inference and improved IntelliSense support.

## Migration Guide

Upgrading to Next.js 14 is straightforward:

1. Update your dependencies
2. Update your configuration if needed
3. Test your application thoroughly

## Conclusion

Next.js 14 represents a significant step forward in React framework development. The combination of performance improvements, new features, and enhanced developer experience makes it an excellent choice for modern web applications.
    `,
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['Next.js', 'React', 'Web Development', 'Performance'],
    author: {
      name: 'Deep Patel',
      avatar: '/api/placeholder/40/40',
    },
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Better Code',
    excerpt: 'Discover advanced TypeScript patterns and techniques that will make your code more robust and maintainable.',
    content: `
# Advanced TypeScript Patterns for Better Code

TypeScript offers powerful features that go beyond basic type annotations. Let's explore advanced patterns that can significantly improve your code quality.

## Generic Constraints

Generic constraints allow you to limit the types that can be used with generics, providing better type safety and IntelliSense.

### Keyof Constraints
Use keyof to constrain generics to object keys.

### Conditional Types
Create types that change based on conditions.

## Utility Types

TypeScript provides built-in utility types that can transform existing types:

### Partial and Required
Make all properties optional or required.

### Pick and Omit
Select or exclude specific properties from types.

### Record and Mapped Types
Create new types by mapping over existing ones.

## Advanced Function Types

### Function Overloads
Define multiple function signatures for different use cases.

### Higher-Order Function Types
Type functions that accept or return other functions.

## Template Literal Types

Create types from string templates for better string manipulation.

## Discriminated Unions

Use discriminated unions for type-safe state management and API responses.

## Best Practices

### Type Guards
Implement custom type guards for runtime type checking.

### Assertion Functions
Create functions that assert types and narrow them.

### Module Augmentation
Extend existing types from third-party libraries.

## Conclusion

Mastering these advanced TypeScript patterns will help you write more robust, maintainable, and type-safe code. Start incorporating these techniques into your projects today.
    `,
    date: '2023-12-28',
    readTime: '8 min read',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Best Practices'],
    author: {
      name: 'Deep Patel',
      avatar: '/api/placeholder/40/40',
    },
  },
  {
    slug: 'web-performance-optimization-guide',
    title: 'Complete Guide to Web Performance Optimization',
    excerpt: 'Learn essential techniques to optimize your web applications for speed, user experience, and search engine rankings.',
    content: `
# Complete Guide to Web Performance Optimization

Web performance is crucial for user experience, SEO, and business success. This comprehensive guide covers essential optimization techniques.

## Core Web Vitals

Google's Core Web Vitals are key metrics for measuring user experience:

### Largest Contentful Paint (LCP)
Measures loading performance. Aim for LCP to occur within 2.5 seconds.

### First Input Delay (FID)
Measures interactivity. FID should be less than 100 milliseconds.

### Cumulative Layout Shift (CLS)
Measures visual stability. Maintain a CLS score of less than 0.1.

## Image Optimization

### Modern Image Formats
Use WebP, AVIF, or JPEG XL for better compression.

### Responsive Images
Implement srcset and sizes attributes for different screen sizes.

### Lazy Loading
Load images only when they're about to enter the viewport.

## Code Optimization

### Bundle Splitting
Split your JavaScript bundles to reduce initial load time.

### Tree Shaking
Eliminate dead code from your bundles.

### Minification and Compression
Minify CSS, JavaScript, and HTML. Enable Gzip or Brotli compression.

## Caching Strategies

### Browser Caching
Set appropriate cache headers for static assets.

### Service Workers
Implement service workers for offline functionality and caching.

### CDN Usage
Use Content Delivery Networks to serve assets from locations closer to users.

## Database and API Optimization

### Query Optimization
Optimize database queries and use proper indexing.

### API Response Caching
Implement caching at the API level to reduce server load.

### Pagination and Lazy Loading
Implement pagination for large datasets.

## Monitoring and Measurement

### Performance Monitoring Tools
Use tools like Lighthouse, WebPageTest, and real user monitoring.

### Continuous Performance Testing
Integrate performance testing into your CI/CD pipeline.

## Conclusion

Web performance optimization is an ongoing process. Regular monitoring, testing, and optimization ensure your applications provide the best possible user experience.
    `,
    date: '2023-12-20',
    readTime: '10 min read',
    tags: ['Performance', 'Web Development', 'Optimization', 'SEO'],
    author: {
      name: 'Deep Patel',
      avatar: '/api/placeholder/40/40',
    },
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
}