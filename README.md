# Vietnamese Provinces API

A comprehensive RESTful API for accessing administrative data of Vietnam, including provinces, districts, and wards. Built with NestJS, TypeORM, and PostgreSQL.

## Features

- Complete administrative data for Vietnam (provinces, districts, wards)
- RESTful API endpoints with Swagger documentation
- PostgreSQL database with Prisma ORM
- Docker support for easy deployment
- TypeScript for type safety and better developer experience

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Language**: TypeScript
- **Containerization**: Docker
- **API Documentation**: Swagger

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- Docker and Docker Compose (for containerized deployment)
- pnpm, npm, or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vietnamese-provinces-api.git
   cd vietnamese-provinces-api
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/vietnamese_provinces
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=vietnamese_provinces
   ```

4. Run database migrations:
   ```bash
   npm run migrate
   # or
   yarn migrate
   # or
   pnpm migrate
   ```

## Running the Application

### Development Mode

```bash
npm run start:dev
# or
yarn start:dev
# or
pnpm start:dev
```

### Production Mode

```bash
npm run start:prod
# or
yarn start:prod
# or
pnpm start:prod
```

### Using Docker

```bash
docker-compose up -d
```

## API Documentation

The API documentation is available at `/api` when the application is running. The documentation is powered by Swagger UI.

### Available Endpoints

- `GET /api/provinces` - Get all provinces
- `GET /api/provinces/:id` - Get a specific province by ID
- `GET /api/provinces/district/:id` - Get districts for a specific province
- `GET /api/provinces/ward/:id` - Get wards for a specific district

## Database Schema

The application uses the following database models:

- **provinces**: Information about Vietnamese provinces
- **districts**: Information about districts within provinces
- **wards**: Information about wards within districts
- **administrative_units**: Administrative unit types
- **administrative_regions**: Administrative regions

## Testing

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Deployment

### Docker Deployment

1. Build and run using Docker Compose:
   ```bash
   docker-compose up -d
   ```

2. For production deployment:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- NestJS team for the amazing framework
- Prisma team for the excellent ORM
- The Vietnamese government for providing the administrative data
