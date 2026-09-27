import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: ['http://localhost:3000'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.setGlobalPrefix('api/v1');
    await app.listen(process.env.PORT ?? 5000);
    console.log(`🚀 NestJS Backend running on: http://localhost:5000/api/v1`);
}
bootstrap();
//# sourceMappingURL=main.js.map