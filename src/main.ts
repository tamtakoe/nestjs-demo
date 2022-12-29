import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StaticInterceptor } from "./static-interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new StaticInterceptor());

  app.use((req, res, next) => {
    // console.log('Middleware response:', res);

    next();
  })

  await app.listen(3000);
}
bootstrap();
