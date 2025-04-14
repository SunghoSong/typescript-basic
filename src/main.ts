// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 전역 인터셉터 설정
    app.use((req, res, next) => {
        const originalJson = res.json;
        res.json = function (body) {
            const json = JSON.parse(
                JSON.stringify(body, (_, value) =>
                    typeof value === 'bigint' ? value.toString() : value,
                ),
            );
            return originalJson.call(this, json);
        };
        next();
    });

    await app.listen(3000);
}
bootstrap();