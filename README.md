
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

```
// 나만의 모듈 시작할 때
src/app.moduel.ts
src/main.ts

두 파일로 시작한다.
```

---

## 데코레이터

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
- 데코레이터의 컨트롤러는 express의 라우터 같은 존재. url을 가져오고 함수를 실행.

---
  
## Controllers
- 컨트롤러는 url를 가져오는 역할

```ts
// src/app.controller.ts

// @Get()은 express의 get 라우터와 같은 역할
@Get()
getHello(): string {
  return this.appService.getHello();
}

// 누군가 /hello로 들어오면 sayHello 함수를 실행한다.
// @Get() 바로 밑에 함수나 클래스가 붙어있어야 한다.
@Get('/hello')
sayHello(): string {
  return 'Hello EveryOne';
}

// /hello로 접속 시 404 Error
@Post('/hello')
  sayHello(): string {
    return 'Hello EveryOne';
  }
```

---

## service
- 비즈니스 로직 함수를 실행하는 공간.

```ts
// app.controller.ts

@Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
```

```ts
// app.service.ts

getHi(): string {
  return 'Hi Nest';
}
```

---
