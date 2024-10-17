# Jonathan Aaron Rocha's Personal Website

Welcome to my personal website repository! This site serves as a portfolio and digital hub for my professional and personal interests.

## Project Structure

The project is organized as follows:

```
src/
├── components/          # Reusable components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Section components (About, Portfolio, Resume, Blog, Contact)
│   └── ui/            # UI components (Buttons, Animations)
├── styles/             # CSS styles
├── utils/              # Utility functions
├── data/               # Static data (blog posts, portfolio projects)
└── pages/              # Next.js pages
```

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/jonx0037/jonathanaaronrocha.git
   cd jonathanaaronrocha
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## GitHub Integration

This project uses GitHub Actions for continuous integration and deployment. The following workflows are set up:

- **Linting and Testing**: Automatically runs on every push to ensure code quality.
- **Staging Deployment**: Automatically deploys to a staging environment on pull requests.
- **Production Deployment**: Deploys to production when merging to the main branch.

## Contribution Guidelines

Feel free to contribute to this project! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request.

## License

This project is licensed under the MIT License.
