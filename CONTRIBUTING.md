# Contributing to Product Management System

Thank you for your interest in contributing to the Product Management System! We welcome contributions from the community and are pleased to have you here.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)
- [Documentation](#documentation)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Git**
- A code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**

   Click the "Fork" button at the top right of this repository.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/productmanagement.git
   cd productmanagement
   ```

3. **Add the original repository as upstream**

   ```bash
   git remote add upstream https://github.com/Bakemono-san/productmanagement.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Set up the backend**

   Ensure you have the backend API running on `http://localhost:2002` for full functionality.

## 🛠️ How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug fixes** - Fix existing issues or bugs
- **Feature enhancements** - Add new features or improve existing ones
- **Documentation** - Improve or add documentation
- **Performance improvements** - Optimize code for better performance
- **UI/UX improvements** - Enhance the user interface and experience
- **Testing** - Add or improve test coverage

### Workflow

1. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**

   Follow our [coding standards](#coding-standards) while making changes.

3. **Test your changes**

   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add your descriptive commit message"
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

   Go to the original repository and create a pull request from your fork.

## 📝 Pull Request Process

### Before Submitting

- [ ] Ensure your code follows our coding standards
- [ ] Run the linter and fix any issues: `npm run lint`
- [ ] Build the project successfully: `npm run build`
- [ ] Test your changes thoroughly
- [ ] Update documentation if necessary
- [ ] Write clear, descriptive commit messages

### Pull Request Template

When creating a pull request, please include:

```markdown
## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested this change
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional information or context about the changes.
```

### Review Process

1. **Automated checks** - Ensure all CI checks pass
2. **Code review** - At least one maintainer will review your PR
3. **Feedback** - Address any feedback or requested changes
4. **Approval** - Once approved, your PR will be merged

## 💻 Coding Standards

### TypeScript

- Use **TypeScript** for all new code
- Define proper interfaces and types
- Avoid using `any` type unless absolutely necessary
- Use descriptive variable and function names

### React/Next.js

- Use **functional components** with hooks
- Follow React best practices
- Use proper prop types and interfaces
- Implement proper error boundaries where needed

### Styling

- Use **TailwindCSS** utility classes
- Follow the existing design patterns
- Ensure responsive design for all components
- Use consistent spacing and color schemes

### File Structure

```text
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── forms/          # Form-related components
│   └── modals/         # Modal components
├── pages/ or app/      # Next.js pages/routes
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── services/           # API and external services
```

### Naming Conventions

- **Files**: Use PascalCase for React components (`UserProfile.tsx`)
- **Directories**: Use lowercase with hyphens (`user-profile/`)
- **Variables**: Use camelCase (`userName`)
- **Constants**: Use UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces**: Use PascalCase (`UserProfile`)

### Code Formatting

- Use **Prettier** for code formatting
- Follow **ESLint** rules
- Use **2 spaces** for indentation
- Add **trailing commas** in arrays and objects
- Use **semicolons** at the end of statements

Example:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}

const createProduct = async (product: Product): Promise<Product> => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create product');
  }
  
  return response.json();
};
```

## 🧪 Testing Guidelines

### Types of Tests

- **Unit tests** - Test individual components and functions
- **Integration tests** - Test component interactions
- **E2E tests** - Test complete user workflows

### Testing Framework

We use the following tools for testing:

- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **Cypress** (future) - E2E testing

### Writing Tests

```typescript
import { render, screen } from '@testing-library/react';
import { ProductCard } from '@/components/ProductCard';

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    const mockProduct = {
      id: 1,
      name: 'Test Product',
      price: 100,
      categoryId: 1,
    };

    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });
});
```

## 🐛 Issue Reporting

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Check if the issue exists in the latest version
- Gather relevant information about your environment

### Issue Template

```markdown
## Bug Description
A clear and concise description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- OS: [e.g., Windows 10, macOS 12.1]
- Browser: [e.g., Chrome 95, Firefox 94]
- Node.js version: [e.g., 18.0.0]

## Screenshots
Add screenshots if applicable.

## Additional Context
Any other context about the problem.
```

## 💡 Feature Requests

### Before Submitting

- Check if the feature already exists
- Search for similar feature requests
- Consider if the feature fits the project's scope

### Feature Request Template

```markdown
## Feature Description
A clear and concise description of the feature.

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How would you like this feature to work?

## Alternatives Considered
Other solutions you've considered.

## Additional Context
Screenshots, mockups, or examples.
```

## 📚 Documentation

### Contributing to Documentation

- Keep documentation up to date with code changes
- Use clear, concise language
- Include code examples where appropriate
- Add screenshots for UI changes

### Documentation Structure

- **README.md** - Project overview and setup
- **CONTRIBUTING.md** - This file
- **API.md** - API documentation
- **DEPLOYMENT.md** - Deployment instructions
- **CHANGELOG.md** - Version history

## 🙋‍♀️ Getting Help

If you need help with contributing:

1. **Check the documentation** first
2. **Search existing issues** for similar questions
3. **Create a new issue** with the "question" label
4. **Join our discussions** for general questions

## 🏷️ Labels

We use the following labels to categorize issues and PRs:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 📦 Release Process

1. **Version bumping** - Follow semantic versioning
2. **Changelog** - Update CHANGELOG.md
3. **Testing** - Ensure all tests pass
4. **Documentation** - Update relevant documentation
5. **Release** - Create a new release on GitHub

## 🙏 Recognition

Contributors are recognized in:

- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub** contributors page

Thank you for contributing to the Product Management System! 🎉