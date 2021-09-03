create database SISTEMA_CADASTRO;

use SISTEMA_CADASTRO;

create table users(
  name varchar(100),
  email varchar(100),
  age int
);

insert into users (name, email, age) values(
  "Usuário teste",
  "teste@user.com",
  1
);

select * from users;

select * from users where age = 19;

select * from users where name = 'Júlia Roberta';

select * from users where age >= 17;

delete from users where name = "Usuário teste";

update users set name = "Mich França" where name = "Michel França";
