import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// CreateMovieDto property 구조가 똑같다. 필수 사항 제외하면
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
