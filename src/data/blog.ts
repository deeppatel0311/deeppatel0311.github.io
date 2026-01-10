export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring and scaling React applications for production environments.",
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
    date: "2025-03-15",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Architecture", "Best Practices"],
    author: {
      name: "Deep Patel",
      avatar: "/api/placeholder/40/40",
    },
  },
  {
    slug: "understanding-api-gateway-rest-http-websocket",
    title: "Understanding API Gateway: REST API vs HTTP API vs WebSocket",
    excerpt:
      "A simple and beginner-friendly guide to choosing between REST API, HTTP API, and WebSocket API in Amazon API Gateway.",
    content: `# Understanding API Gateway: REST API vs HTTP API vs WebSocket

Amazon API Gateway is a popular AWS service that helps you create and manage APIs for web, mobile, and serverless applications.

But choosing between **REST API**, **HTTP API**, and **WebSocket API** can be confusing.

Let’s break it down 👇

## What is Amazon API Gateway?

Amazon API Gateway acts as a **front door** for your backend services such as:

- AWS Lambda
- EC2
- ECS
- Any HTTP endpoint

It handles routing, security, scaling, and monitoring so you can focus on building features.

## REST API

### Best for: Complex & enterprise-grade APIs

**REST API** is the most feature-rich option in API Gateway.

### Key points

- Full REST support (resources & methods)
- API keys and usage plans
- Request/response transformation
- Advanced authorization (IAM, Cognito, Lambda Authorizer)
- Caching support

### When to use

- You need advanced API management features
- You want fine-grained control over requests and responses
- You’re building large or legacy REST APIs

⚠️ Slightly higher cost and latency compared to HTTP API

## HTTP API

### Best for: Modern serverless APIs

**HTTP API** is a lightweight, faster, and cheaper alternative to REST API.

### Key points

- Lower latency and cost
- Simple routing
- Native Lambda integration
- JWT authentication (Cognito / OAuth 2.0)
- Built-in CORS support

### When to use

- You’re building serverless or microservices-based APIs
- You don’t need advanced REST features
- Cost and performance matter

🚀 Recommended choice for most modern applications.

## WebSocket API

### Best for: Real-time communication

**WebSocket API** enables persistent, bidirectional communication between clients and servers.

### Key points

- Real-time data exchange
- Persistent connections
- Event-based routes: '$connect', '$disconnect', '$default'
- Works well with Lambda and DynamoDB

### When to use

- Chat applications
- Live notifications
- Online games
- Real-time dashboards

## Quick Comparison

| Feature | REST API | HTTP API | WebSocket API |
| Protocol | HTTP | HTTP | WebSocket |
| Cost | 💰 High | 💵 Low | 💰 Medium |
| Latency | ⚡ Medium | ⚡ Low | ⚡ Very Low |
| Real-time support | ❌ No | ❌ No | ✅ Yes |
| API Keys & Usage Plans | ✅ Yes | ❌ No | ❌ No |
| Request/Response Transformation | ✅ Yes | ⚠️ Limited | ⚠️ Limited |
| Best Use Case | Complex enterprise APIs | Serverless & microservices | Live apps, chat, real-time dashboards |

## Which One Should You Choose?

- Choose **REST API** for advanced control and enterprise needs  
- Choose **HTTP API** for fast, low-cost serverless APIs  
- Choose **WebSocket API** for real-time applications  

Many production systems use **a mix of these**, depending on the use case.

## Final Thoughts

Choosing the right API Gateway type impacts **cost, performance, and scalability**.

For most modern AWS projects, **HTTP API** is the best starting point, while **WebSocket API** is ideal for real-time use cases.

Happy building 🚀`,
    date: "2025-08-10",
    readTime: "7 min read",
    tags: ["aws", "serverless", "apigateway", "cloud", "beginners"],
    author: {
      name: "Deep Patel",
      avatar: "/api/placeholder/40/40",
    },
  },
  {
    slug: "amazon-q-for-developers-future-of-coding",
    title: "Amazon Q for Developers: Is This the Future of Coding?",
    excerpt:
      "Explore Amazon Q, the AI-powered coding assistant by AWS, and its potential impact on developers and the future of programming.",
    content: `# Amazon Q for Developers: Is This the Future of Coding?

Amazon recently introduced **Amazon Q**, an AI-powered coding assistant that promises to redefine the way developers write and understand code. But what is it, and how could it shape the future of programming?

## What is Amazon Q?

Amazon Q is designed to help developers **write, debug, and optimize code** using AI. It leverages large language models to:

- Suggest code snippets
- Automate repetitive tasks
- Provide real-time explanations for code
- Integrate with AWS services seamlessly

Think of it as **a smart coding companion** that sits alongside your IDE.

## Key Features for Developers

- **AI-powered code suggestions** – Q can autocomplete entire functions or provide context-aware code snippets.
- **Debugging assistance** – Identify errors, suggest fixes, and explain why a piece of code might fail.
- **Documentation generation** – Automatically generate inline documentation or API references.
- **Cloud integration** – Directly works with AWS services like Lambda, DynamoDB, and S3, making cloud-native development faster.

## How Amazon Q Could Change Coding

1. **Faster Development** – By suggesting code and reducing boilerplate, developers can focus on logic and architecture.  
2. **Lower Barrier to Entry** – Beginners can write more complex programs with guidance from AI.  
3. **Enhanced Collaboration** – Q can provide explanations for code, helping teams onboard faster.  
4. **Shift in Skills** – The focus may move from memorizing syntax to designing systems and problem-solving.

## Limitations to Keep in Mind

- **Context Awareness** – While Q is smart, it may not fully understand the unique architecture of your project.  
- **Over-reliance on AI** – Developers still need critical thinking to verify AI suggestions.  
- **Cost & Access** – Initially, this may be limited to certain AWS users or paid tiers.

## The Future Outlook

Amazon Q is part of a broader trend where **AI is becoming a co-pilot for developers**. We’re moving towards a future where:

- Writing standard code may become mostly assisted by AI  
- Human developers focus more on **architecture, design, and problem-solving**  
- Learning to effectively collaborate with AI becomes a key skill

## Final Thoughts

Amazon Q is not just another IDE plugin — it could redefine **how coding is done in the cloud era**. While it won’t replace developers, it promises to **accelerate workflows, reduce friction, and make coding more accessible**.  

The question isn’t whether developers will use AI — it’s **how effectively we integrate AI into our workflow**.`,
    date: "2025-10-05",
    readTime: "6 min read",
    tags: ["aws", "amazon", "ai", "developers", "future", "programming"],
    author: {
      name: "Deep Patel",
      avatar: "/api/placeholder/40/40",
    },
  },
  {
    slug: "serverless-file-processing-resize-images-lambda-s3",
    title:
      "Serverless File Processing: Resize Images Automatically Using Lambda + S3",
    excerpt:
      "Learn how to automatically resize images using AWS Lambda and S3, creating a fully serverless file processing workflow.",
    content: `# Serverless File Processing: Resize Images Automatically Using Lambda + S3

Handling images at scale can be challenging. Whether it's for a website, app, or storage optimization, **resizing images automatically** saves time and reduces storage costs.

With **AWS Lambda and S3**, you can build a fully serverless workflow that **resizes images automatically** whenever a new file is uploaded.

## How It Works

The workflow is simple:

- A user uploads an image to an S3 bucket ('uploads/' folder).
- An S3 event triggers a Lambda function.
- The Lambda function resizes the image to desired dimensions.
- The resized image is saved to another S3 folder ('resized/').

This approach **requires no servers**, scales automatically, and integrates seamlessly with your AWS environment.

## AWS Services Used

- **Amazon S3** – Stores original and resized images.
- **AWS Lambda** – Processes images on upload.
- **Node.js + Sharp** – Resizes images efficiently in Lambda.
- **S3 Event Notifications** – Trigger Lambda on new uploads.

## Lambda Function Code (Node.js)

\`\`\`javascript
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import sharp from "sharp"

const s3 = new S3Client({ region: "us-east-1" })

export const handler = async (event) => {
  for (const record of event.Records) {
    const bucket = record.s3.bucket.name
    const key = record.s3.object.key

    // Get the original image
    const original = await s3.send(
      new GetObjectCommand({ Bucket: bucket, Key: key })
    )

    const buffer = await streamToBuffer(original.Body)

    // Resize the image
    const resized = await sharp(buffer)
      .resize({ width: 300 }) // Resize width to 300px
      .toBuffer()

    // Save resized image to another folder
    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: 'resized/\${key}',
        Body: resized,
        ContentType: "image/jpeg"
      })
    )

    console.log('Resized image saved: resized/\${key}')
  }
}

// Helper function to convert stream to buffer
const streamToBuffer = async (stream) => {
  const chunks = []
  for await (const chunk of stream) {
    chunks.push(chunk)
  }
  return Buffer.concat(chunks)
}
\`\`\`

## Setting Up S3 Event Trigger

- Go to your S3 bucket → **Properties → Event notifications**
- Add a new event:
  - Event type: 'PUT' (for new uploads)
  - Prefix: uploads/' (optional)
  - Lambda function: select the function created above

Now, whenever you upload an image to 'uploads/', Lambda will automatically resize it and save it in 'resized/'.

## Benefits of This Serverless Approach

- **No servers to manage** – fully managed by AWS
- **Automatic scaling** – handles thousands of images at once
- **Cost-efficient** – pay only for Lambda invocations
- **Flexible resizing** – easily add multiple sizes (thumbnails, web, etc.)

## Extending This Workflow

- **Generate multiple sizes**: small, medium, large for responsive design.
- **Optimize images**: use 'sharp' to compress images for web.
- **Send notifications**: trigger SNS or email after processing.
- **Integrate with APIs**: make resized images accessible via CloudFront.

## Final Thoughts

Serverless file processing with **Lambda + S3** is a **powerful pattern** for modern applications. It reduces operational overhead, is cost-efficient, and can be extended to handle **videos, PDFs, or any other files**.

Start small with image resizing and expand your serverless workflows as your application grows. 🚀
`,
    date: "2025-12-18",
    readTime: "8 min read",
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
    author: {
      name: "Deep Patel",
      avatar: "/api/placeholder/40/40",
    },
  },
  {
    slug: "aws-lambda-layers-explained",
    title: "AWS Lambda Layers Explained Simply (With One Example)",
    excerpt:
      "Learn what AWS Lambda Layers are, why they are useful, and see a simple example using Lodash to make your functions smaller and reusable.",
    content: `
# AWS Lambda Layers Explained Simply (With One Example)

AWS Lambda Layers are a powerful feature that lets you **share code, libraries, and dependencies** across multiple Lambda functions. Layers help you **reduce duplication**, manage updates more efficiently, and keep your functions smaller.

## Why Use Lambda Layers?

- **Code Reusability**: Share common libraries or helper functions across multiple Lambdas.
- **Smaller Function Packages**: Keep your deployment package lean by moving large dependencies to a layer.
- **Easier Updates**: Update the layer once, and all functions using it get the update automatically.
- **Organized Structure**: Separate application logic from external dependencies.

## How Lambda Layers Work

- A Lambda Layer is basically a **.zip archive** containing code, libraries, or custom runtimes.
- You can attach **up to 5 layers** to a Lambda function.
- Each layer can contain **libraries, custom runtimes, or even shared configuration files**.
- Lambda functions can access the layer content at **/opt** during execution.

## Example: Using a Layer to Include Lodash

Let's say you want to use the popular **Lodash** library across multiple Lambda functions.

### Step 1: Create a Layer

\`\`\`bash
mkdir my-layer
cd my-layer
mkdir nodejs
cd nodejs
npm init -y
npm install lodash
zip -r ../my-layer.zip .
\`\`\`

### Step 2: Upload Layer to Lambda

- Go to AWS Lambda → **Layers → Create Layer**
- Name your layer **lodash-layer**
- Upload **my-layer.zip**
- Choose runtime (e.g., Node.js 20)

### Step 3: Use Layer in a Lambda Function

\`\`\`javascript
import _ from 'lodash'

export const handler = async (event) => {
  const numbers = [1, 2, 3, 4, 5]
  const reversed = _.reverse([...numbers])
  console.log('Reversed Array:', reversed)
  return reversed
}
\`\`\`

- Attach the **lodash-layer** to your Lambda function.
- Now '_' (Lodash) is available inside your function **without including it in the deployment package**.

## Best Practices

- Keep **layers small**: Only include necessary files.
- Use **versioning**: Every time you update a layer, publish a new version.
- **Share layers across accounts** if needed, but manage permissions carefully.
- **Combine layers wisely**: Avoid too many layers; they can increase cold start times.

## Key Benefits

- **Simplifies dependency management**
- **Reduces Lambda deployment package size**
- **Encourages code reuse**
- **Makes updates easy and centralized**

## Conclusion

Lambda Layers are a simple yet **powerful way to manage shared code** in AWS Lambda. By using layers, you can keep your functions clean, reduce duplication, and maintain libraries efficiently.  

Start by moving common dependencies like Lodash or custom helper functions to a layer, and see how your Lambda development becomes faster and more organized.
  `,
    date: "2025-11-03",
    readTime: "7 min read",
    tags: ["AWS", "Lambda", "Serverless", "Layers", "Node.js", "Cloud"],

    author: {
      name: "Deep Patel",
      avatar: "/api/placeholder/40/40",
    },
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
