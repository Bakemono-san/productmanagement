# Product Management System

A modern, full-featured product management dashboard built with Next.js 15, TypeScript, and TailwindCSS. This application provides a comprehensive solution for managing products, categories, and sales analytics with a clean, responsive interface.

## 🚀 Features

### Core Functionality

- **Product Management**: Create, read, update, and delete products with detailed information
- **Category Management**: Organize products into categories with descriptions and images
- **Inventory Tracking**: Monitor stock levels and pricing information
- **Sales Analytics**: View sales data and trends through interactive charts
- **Dashboard**: Real-time overview of key metrics and recent activities

### User Experience

- **Authentication System**: Secure login/logout with session management
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Components**: Modal dialogs, form validation, and real-time updates
- **Image Upload**: Support for product and category image management
- **Data Visualization**: Charts and graphs powered by Recharts

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first CSS framework
- **React 19** - Latest React features
- **Lucide React** - Beautiful icon library
- **Recharts** - Data visualization library
- **TanStack Query** - Server state management

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast development builds

## 📁 Project Structure

```text
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── categories/        # Category management
│   ├── products/          # Product management
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── dashboard/         # Dashboard-specific components
│   ├── forms/             # Form components
│   ├── inputs/            # Input field components
│   ├── logic/             # Business logic components
│   ├── modals/            # Modal components
│   └── product/           # Product-specific components
├── hooks/                 # Custom React hooks
├── Service/               # API services
│   └── Api/              # API client
└── types/                 # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Backend API server running on `http://localhost:2002`

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd productmanagement
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Setup

Make sure your backend API is running on `http://localhost:2002` with the following endpoints:

- `/auth/login` - Authentication
- `/products` - Product CRUD operations
- `/categories` - Category CRUD operations
- `/create-product` - Create new products
- `/create-category` - Create new categories

## 📱 Pages & Features

### Dashboard (`/`)

- Overview statistics and KPIs
- Sales charts and analytics
- Recent products and activities
- Quick action buttons

### Products (`/products`)

- Product listing with search and filters
- Add/edit product forms
- Inventory management
- Product categorization

### Categories (`/categories`)

- Category management interface
- Create and edit categories
- Category descriptions and images
- Product assignment

### Authentication (`/auth/login`)

- Secure user authentication
- Session management with cookies
- Protected route middleware

## 🔧 Available Scripts

```bash
# Development with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🔐 Authentication

The application uses cookie-based authentication with middleware protection:

- Unauthenticated users are redirected to `/auth/login`
- Protected routes require valid session tokens
- Automatic logout on token expiration

## 🎨 Styling

- **TailwindCSS 4** for utility-first styling
- **Custom components** for consistent design
- **Responsive design** with mobile-first approach
- **Dark/light mode** support (configurable)

## 📊 Data Management

- **TanStack Query** for server state management
- **TypeScript interfaces** for type safety
- **RESTful API** integration
- **Real-time updates** and caching

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment

1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Ensure backend API is accessible

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information on:

- Setting up the development environment
- Coding standards and best practices
- Pull request process
- Issue reporting guidelines
- Testing requirements

Quick start for contributors:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our coding standards
4. Test your changes: `npm run lint && npm run build`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

For detailed guidelines, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Related Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
