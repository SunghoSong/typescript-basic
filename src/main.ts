// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

    // Swagger 설정
    const config = new DocumentBuilder()
        .setTitle('My API')           // API 제목
        .setDescription('API description')  // API 설명
        .setVersion('1.0')            // 버전
        .addTag('users')              // 태그 추가
        .build();

    const document = SwaggerModule.createDocument(app, config); // Swagger 문서 생성
    SwaggerModule.setup('api', app, document);  // 'api' 경로에서 Swagger 문서 확인

    await app.listen(3000);
}
bootstrap();