"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        // 전역 인터셉터 설정
        app.use((req, res, next) => {
            const originalJson = res.json;
            res.json = function (body) {
                const json = JSON.parse(JSON.stringify(body, (_, value) => typeof value === 'bigint' ? value.toString() : value));
                return originalJson.call(this, json);
            };
            next();
        });
        // Swagger 설정
        const config = new swagger_1.DocumentBuilder()
            .setTitle('My API') // API 제목
            .setDescription('API description') // API 설명
            .setVersion('1.0') // 버전
            .addTag('users') // 태그 추가
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config); // Swagger 문서 생성
        swagger_1.SwaggerModule.setup('api', app, document); // 'api' 경로에서 Swagger 문서 확인
        yield app.listen(3000);
    });
}
bootstrap();
