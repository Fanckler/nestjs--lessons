import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class UserCreateDto {
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsEmail()
  readonly email: string;

}
