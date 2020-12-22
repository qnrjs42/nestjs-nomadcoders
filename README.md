
```
npm i -g @nestjs/cli

nestjs

project-name: nestjs-nomadcoders

select: npm
```

```
// 초기 실행
npm run start:dev
```

- nestJS는 src/main.ts 파일 필수.

```ts
// src/app.module.ts

// 이 부분을 데코레이터라한다.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
```

- 데코레이터는 클래스에 함수 기능을 추가할 수 있음.
- 즉, 클래스 위의 함수라고 생각하면 되고, 클래스를 위해 움직인다 보면 된다.