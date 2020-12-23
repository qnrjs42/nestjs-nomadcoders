
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

## nest generate

```
// 나만의 모듈 시작할 때
src/app.moduel.ts
src/main.ts

두 파일로 시작한다.
```

```ts
nest g co
-> g: 생성, co: 컨트롤러

? What name would you like to use for the controller? movies

src/movies/movies.controller.ts 파일이 생성된다.

// controller 파일이 생성됨 동시에 app.module.ts 파일이 자동으로 아래와 같이 수정된다.
import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
```

```ts
// movies/movies.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This wull return all movies';
  }
}
```

- @Controller('movies') 이 부분이 컨트롤러를 위한 url를 만듦. (localhost:3000/movies/)
- 즉, 이 부분이 엔트리 포인트를 컨트롤.
- @Controller() 빈 값을 주면 (localhost:3000/)으로 접속했을 때 getAll 함수가 실행된다.

<br/>

```ts
// movies/movies.controller.ts

@Get('/:id')
getOne() {
  return 'This will return one movie';
}

// 파라미터가 있을 경우
@Get('/:id')
getOne(@Param('id') id: string) {
  return `This will return one movie with the id: ${id}`;
}

@Get() 안에 '/:id'와
getOne(@Parm()) 안에 'id'가 같아야 한다.

하지만 id: string은 다르게 써도 된다.
```
- localhost:3000/1 으로 접속 시 getOne 함수 실행.
- nestJS는 무언가 필요하면 request해야 함.

<br/>

```ts
// movies/movies.controller.ts
@Post()
create(@Body() movieData: any) {
  console.log(movieData);
  return 'This will create a movie';
}
```
```json
// localhost:3000/movies
// request POST - body - json
{
	"name": "Tenet",
	"director": "Nolan"
}

// console
{ name: 'Tenet', director: 'Nolan' }
```

<br/>

### Param + Body

```ts
// movies/movies.controller.ts
@Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
```

```json
// localhost:3000/movies/12
// request PATCH - body - json
{
	"name": "Tenet",
	"director": "Nolan"
}

// response
{
  "updatedMovie": "12",
  "name": "Tenet",
  "director": "Nolan"
}
```

<br/>

### Query String

```ts
// movies/movies.controller.ts
@Get('search')
search(@Query('year') searchingYear: string) {
  return `We are searching for a movie: ${searchingYear}`;
}
```

```json
// localhost:3000/movies/search?year=2000
// request GET


// response
We are searching for a movie: 2000
```